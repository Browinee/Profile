import {AvatarContainer, Bar, Basic, BasicInfo, Container, WorkExperience} from "./components/styleComponents";
import {useAuth} from "../auth/context/auth-context";
import Avatar from "../../components/Avatar";
import InfoBlock from "./components/InfoBlock";
import Summary from "./components/Summary";
import {Button, Divider, Upload} from "antd";
import Experience from "./components/Experience";
import {User, Work} from "../../types/user";
import {FeatureToggle} from "../auth/auth";
import {PERMISSION_MAP} from "../auth/permissionList";
import {UploadOutlined} from "@ant-design/icons";
import React, {useCallback, useState} from "react";
import {UploadChangeParam} from "antd/lib/upload/interface";
import {getBase64} from "../../utils/base64";
import {DefaultCompanyInfo, RESUME_MAPS} from "./constants";
import BasicForm from "./components/Template/Basic";
import SummaryForm from "./components/Template/Summary";
import {adapterBasic, adapterSummary, adapterWorkExperience} from "./adapter";
import ExperienceForm from "./components/Template/Experience";

function Profile() {
    const {user, updateUser} = useAuth();
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
    const changeHandler = (info: UploadChangeParam) => {
        getBase64(info.file.originFileObj, imageUrl => updateImageHandler(imageUrl));
    };
    const [modalType, setModalType] = useState("");
    const [selectedWork, setSelectedWork] = useState<Work>(DefaultCompanyInfo);
    const modalHandler = useCallback((type, workId) => {
        setModalType(type);
        const work = user?.workExperience.find(w => w.id === workId) || DefaultCompanyInfo;
        setSelectedWork(work);
    }, []);
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

    return (
        <Container>
            <Basic>
                <AvatarContainer>
                    <FeatureToggle permissions={[PERMISSION_MAP.AVATAR_VIEW]}>
                        <Avatar imageUrl={user?.avatar || ""} />
                    </FeatureToggle>
                    <FeatureToggle permissions={[PERMISSION_MAP.AVATAR_EDIT]}>
                        <Upload name="file" onChange={changeHandler} showUploadList={false} action="">
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
                <ExperienceForm workExperience={selectedWork} cancelHandler={onClose} confirmHandler={onConfirmHandler} />
            )}
        </Container>
    );
}

export default Profile;
