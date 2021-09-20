import React from "react";
import {AvatarContainer, Bar, Basic, BasicInfo, WorkExperience} from "../profile/components/styleComponents";
import FeatureToggle from "../auth/auth";
import {PERMISSION_MAP} from "../auth/permissionList";
import Avatar from "../../components/Avatar";
import {Divider} from "antd";
import InfoBlock from "../profile/components/InfoBlock";
import Summary from "../profile/components/Summary";
import Experience from "../profile/components/Experience";
import {useAuth} from "../auth/context/auth-context";
import styled from "styled-components";
import {SharedProvider} from "./context/shared-context";

const Container = styled.main`
    width: 100vw;
    height: 100vh;
    background: white;
    display: flex;
    position: relative;
`;

function SharedProfile() {
    const showBasic = true;
    const {user} = useAuth();
    return (
        <SharedProvider>
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
        </SharedProvider>
    );
}

export default SharedProfile;
