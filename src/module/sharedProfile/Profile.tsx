import React, {useCallback, useEffect, useState} from "react";
import {AvatarContainer, Bar, Basic, BasicInfo, StyledSidebarButton, WorkExperience} from "../profile/components/styleComponents";
import FeatureToggle from "../auth/auth";
import {PERMISSION_MAP} from "../auth/permissionList";
import Avatar from "../../components/Avatar";
import {Divider} from "antd";
import InfoBlock from "../profile/components/InfoBlock";
import Experience from "../profile/components/Experience";
import {useAuth} from "../auth/context/auth-context";
import styled from "styled-components";
import {SharedProvider} from "./context/shared-context";
import Summary from "../profile/components/Summary";
import {ArrowRightSVGICON} from "../../components/Aarrow";
import useMedia from "../../hooks/useMedia";
import {QUERY} from "../../constants";

const Container = styled.main`
    width: 100%;
    max-width: 1366px;
    height: 100vh;
    background: white;
    display: flex;
    position: relative;
`;

function Profile() {
    const {user} = useAuth();
    const isMatched = useMedia(QUERY);
    const [isBasic, setIsBasic] = useState(isMatched);
    const toggleBasic = useCallback(() => {
        setIsBasic(prev => !prev);
    }, [setIsBasic]);
    useEffect(() => {
        setIsBasic(isMatched);
    }, [isMatched]);
    return (
        <SharedProvider>
            <Container>
                <Basic className={`${isMatched && isBasic && "closed"}`}>
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
                <StyledSidebarButton onClick={toggleBasic} showBasic={!isBasic}>
                    <ArrowRightSVGICON />
                </StyledSidebarButton>
            </Container>
        </SharedProvider>
    );
}

export default Profile;
