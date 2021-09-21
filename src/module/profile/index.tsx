import {
    AvatarContainer,
    Bar,
    Basic,
    BasicInfo,
    Container,
    StyledSidebarButton,
    WorkExperience,
} from "./components/styleComponents";
import {useAuth} from "../auth/context/auth-context";
import Avatar from "../../components/Avatar";
import InfoBlock from "./components/InfoBlock";
import Summary from "./components/Summary";
import {Button, Divider, Upload} from "antd";
import Experience from "./components/Experience";
import {User, Work} from "../../types/user";
import FeatureToggle from "../auth/auth";
import {PERMISSION_MAP} from "../auth/permissionList";
import {UploadOutlined} from "@ant-design/icons";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {UploadChangeParam} from "antd/lib/upload/interface";
import {getBase64} from "../../utils/base64";
import {DefaultCompanyInfo, RESUME_MAPS} from "./constants";
import BasicForm from "./components/Template/Basic";
import SummaryForm from "./components/Template/Summary";
import {adapterBasic, adapterSummary} from "./adapter";
import ExperienceForm from "./components/Template/Experience";
import {ArrowRightSVGICON} from "../../components/Aarrow";
import Modal from "../../components/Modal";
import Header from "./components/Header";
import useMedia from "../../hooks/useMedia";
import {QUERY} from "../../constants";

function Profile() {
    const {user, updateUser, errorMsg, resetError} = useAuth();
    const updateImageHandler = useCallback(
        (imageUrl: string) => {
            const newUserData = {
                ...user,
                avatar: imageUrl,
            } as User;
            updateUser(newUserData);
        },
        [user, updateUser]
    );
    const uploadAvatarHandler = (info: UploadChangeParam) => {
        getBase64(info.file.originFileObj, imageUrl => updateImageHandler(imageUrl));
    };

    const [modalType, setModalType] = useState("");
    const [selectedWork, setSelectedWork] = useState<Work>(DefaultCompanyInfo);
    const [isNew, setIsNew] = useState(false);
    const modalHandler = useCallback(
        (type: string, workId?: string | null) => {
            setModalType(type);
            const work = (user?.workExperience || []).find(w => w.id === workId) || DefaultCompanyInfo;
            setIsNew(!workId);
            setSelectedWork(work);
        },
        [user, setModalType, setSelectedWork]
    );
    const onClose = useCallback(() => {
        setModalType("");
    }, []);
    const onConfirmHandler = (value: Partial<User>) => {
        const newUser = {
            ...user,
            ...value,
        } as User;
        updateUser(newUser);
    };
    const onConfirmWorkHandler = (workId: string, workExperience: Work) => {
        if (user) {
            const isUpdated: boolean = !!user.workExperience.find((work: Work) => work.id === workId);
            const newWorkExperience = isUpdated
                ? user.workExperience.map(work => {
                      return work.id === workId ? workExperience : work;
                  })
                : [workExperience, ...user.workExperience];
            const newUser = {
                ...user,
                workExperience: newWorkExperience,
            };
            updateUser(newUser);
        }
    };
    const onDeleteHandler = (workId: string) => {
        if (user) {
            const newUser = {
                ...user,
                workExperience: user.workExperience.filter(work => work.id !== workId),
            };
            updateUser(newUser);
        }
    };

    const isMatched = useMedia(QUERY);
    const [isBasic, setIsBasic] = useState(isMatched);
    const toggleBasic = useCallback(() => {
        setIsBasic(prev => !prev);
    }, [setIsBasic]);
    useEffect(() => {
        setIsBasic(isMatched);
    }, [isMatched]);
    const errorModalButton = useMemo(() => {
        return (
            <Button type="primary" onClick={resetError}>
                Got it
            </Button>
        );
    }, [resetError]);
    return (
        <>
            <Header />
            <Container>
                <Basic className={`${isMatched && isBasic && "closed"}`}>
                    <AvatarContainer className="avatar-container">
                        <FeatureToggle permissions={[PERMISSION_MAP.AVATAR_VIEW]}>
                            <Avatar imageUrl={user?.avatar || ""} />
                        </FeatureToggle>
                        <FeatureToggle permissions={[PERMISSION_MAP.AVATAR_EDIT]}>
                            <Upload name="file" onChange={uploadAvatarHandler} showUploadList={false} action="">
                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload>
                        </FeatureToggle>
                    </AvatarContainer>
                    <Bar />
                    <BasicInfo>
                        <InfoBlock user={user} editHandler={modalHandler} />
                    </BasicInfo>
                </Basic>
                <WorkExperience>
                    <Summary summary={user?.summary || []} editHandler={modalHandler} />
                    <Divider />
                    <Experience workExperience={user?.workExperience || []} editHandler={modalHandler} />
                </WorkExperience>
                {modalType === RESUME_MAPS.basic && (
                    <BasicForm basicInfo={adapterBasic(user)} cancelHandler={onClose} confirmHandler={onConfirmHandler} />
                )}
                {modalType === RESUME_MAPS.summary && (
                    <SummaryForm summary={adapterSummary(user)} cancelHandler={onClose} confirmHandler={onConfirmHandler} />
                )}
                {modalType === RESUME_MAPS.experience && (
                    <ExperienceForm
                        isNew={isNew}
                        workExperience={selectedWork}
                        cancelHandler={onClose}
                        confirmHandler={onConfirmWorkHandler}
                        deleteHandler={onDeleteHandler}
                    />
                )}
                <StyledSidebarButton onClick={toggleBasic} showBasic={!isBasic}>
                    <ArrowRightSVGICON />
                </StyledSidebarButton>
                {errorMsg && (
                    <Modal height={100} title={"Error"} cancelHandler={resetError} footer={errorModalButton}>
                        {errorMsg}
                    </Modal>
                )}
            </Container>
        </>
    );
}

export default Profile;
