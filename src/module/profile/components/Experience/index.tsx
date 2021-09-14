import { Work } from "../../../../types/user";
import styled from "styled-components";
import ExperienceBLock from "./experienceBLock";

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
  console.log("work", workExperience);
  return (
    <Container>
      <Header>Experience</Header>
      {workExperience.map((exp, idx) => {
        return <ExperienceBLock key={idx} {...exp} />;
      })}
    </Container>
  );
};

export default Experience;
