import React from "react";
import {AvatarContainer, Bar, Basic, BasicInfo, Container, WorkExperience} from "../profile/components/styleComponents";
import FeatureToggle from "../auth/auth";
import {PERMISSION_MAP} from "../auth/permissionList";
import Avatar from "../../components/Avatar";
import {Button, Divider, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import InfoBlock from "../profile/components/InfoBlock";
import Summary from "../profile/components/Summary";
import Experience from "../profile/components/Experience";
import {useAuth} from "../auth/context/auth-context";

function SharedProfile() {
    const showBasic = true;
    const {user} = useAuth();
    console.log("user", user);
    return (
        <Container>
            <Basic showBasic={showBasic} className={`${!showBasic && "closed"}`}>
                <AvatarContainer className="avatar-container">
                    <FeatureToggle permissions={[PERMISSION_MAP.AVATAR_VIEW]}>
                        <Avatar imageUrl={user?.avatar || ""} />
                    </FeatureToggle>
                </AvatarContainer>
                <Bar />
                <BasicInfo>
                    <InfoBlock user={user} />
                </BasicInfo>
            </Basic>
            <WorkExperience>
                <Summary summary={user?.summary || []} />
                <Divider />
                <Experience workExperience={user?.workExperience || []} />
            </WorkExperience>
        </Container>
    );
}

export default SharedProfile;
