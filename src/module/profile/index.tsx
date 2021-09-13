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
import InfoBlock from "./components/InfoBlock";

function Profile() {
  const { user } = useAuth();
  console.log("data", user);
  return (
    <Container>
      <Basic>
        <AvatarContainer>
          <Avatar imageUrl={""} updateImage={() => {}} />
        </AvatarContainer>
        <Bar />
        <BasicInfo>
          <InfoBlock user={user} />
        </BasicInfo>
      </Basic>
      <WorkExperience>right</WorkExperience>
    </Container>
  );
}

export default Profile;
