import {Work} from "../../../../types/user";
import styled from "styled-components";
import {FeatureToggle} from "../../../auth/auth";
import {PERMISSION_MAP} from "../../../auth/permissionList";
import ExperienceBLock from "./experienceBLock";

interface ExperienceProps {
    workExperience: Work[];
    editHandler: (type: string, workId: string) => void;
}

const Header = styled.header`
    font-size: 2rem;
    margin-bottom: 1rem;
`;
const Container = styled.div`
    width: 100%;
    height: 100%;
`;
const Experience = (props: ExperienceProps) => {
    const {workExperience, editHandler} = props;
    return (
        <Container>
            <Header>Experience</Header>
            <FeatureToggle permissions={[PERMISSION_MAP.SUMMARY_VIEW]}>
                {workExperience.map((exp, idx) => {
                    return <ExperienceBLock key={idx} work={exp} clickHandler={editHandler} />;
                })}
            </FeatureToggle>
        </Container>
    );
};

export default Experience;
