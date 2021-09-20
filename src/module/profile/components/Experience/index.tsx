import {Work} from "../../../../types/user";
import styled from "styled-components";
import FeatureToggle from "../../../auth/auth";
import {PERMISSION_MAP} from "../../../auth/permissionList";
import ExperienceBLock from "./experienceBLock";
import AddIcon from "../../../../components/AddIcon";
import {useCallback} from "react";
import {RESUME_MAPS} from "../../constants";

interface ExperienceProps {
    workExperience: Work[];
    editHandler?: (type: string, workId?: string) => void;
}

const Header = styled.header`
    font-size: 2rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 0.5rem;
`;
const Container = styled.div`
    width: 100%;
    height: 100%;
`;
const AddContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 1.5rem;
    color: lightcoral;
    align-items: center;
    cursor: pointer;
`;
const Experience = (props: ExperienceProps) => {
    const {workExperience, editHandler = () => {}} = props;
    const addHandler = useCallback(() => {
        editHandler(RESUME_MAPS.experience);
    }, [editHandler]);
    return (
        <Container>
            <Header>
                Experience
                <FeatureToggle permissions={[PERMISSION_MAP.EXPERIENCE_EDIT]}>
                    <AddContainer onClick={addHandler}>
                        <AddIcon size={14} />
                        <span>Add new experience</span>
                    </AddContainer>
                </FeatureToggle>
            </Header>
            <FeatureToggle permissions={[PERMISSION_MAP.EXPERIENCE_VIEW]}>
                {workExperience.map((exp, idx) => {
                    return <ExperienceBLock key={idx} work={exp} clickHandler={editHandler} />;
                })}
            </FeatureToggle>
        </Container>
    );
};

export default Experience;
