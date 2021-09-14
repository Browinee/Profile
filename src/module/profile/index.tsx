import {
  AvatarContainer,
  Bar,
  Basic,
  Container,
  WorkExperience,
  BasicInfo,
} from "./components/styleComponents";
import { useAuth } from "../auth/context/auth-context";
import Avatar from "../../components/Avatar";
import InfoBlock from "./components/infoBlock";
import Summary from "./components/summary";
import { Divider } from "antd";
import Experience from "./components/Experience";

function Profile() {
  const { user } = useAuth();
  console.log("data", user);
  return (
    <Container>
      <Basic>
        <AvatarContainer>
          <Avatar imageUrl={""} updateImage={() => {}} upload />
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

export default Profile;
