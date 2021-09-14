import { Work } from "../../../../types/user";
import styled from "styled-components";
import ExperienceBLock from "./experienceBLock";
import { FeatureToggle } from "../../../auth/auth";
import { PERMISSION_MAP } from "../../../auth/permissionList";
import EditIcon from "../../../../components/EditIcon";

interface ExperienceProps {
  workExperience: Work[];
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
  const { workExperience } = props;
  return (
    <Container>
      <Header>
        Experience
        <FeatureToggle permissions={[PERMISSION_MAP.SUMMARY_VIEW]}>
          <EditIcon openEditModal={() => {}} />
        </FeatureToggle>
      </Header>
      <FeatureToggle permissions={[PERMISSION_MAP.SUMMARY_VIEW]}>
        {workExperience.map((exp, idx) => {
          return <ExperienceBLock key={idx} {...exp} />;
        })}
      </FeatureToggle>
    </Container>
  );
};

export default Experience;
