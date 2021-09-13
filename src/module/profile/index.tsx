import styled from "@emotion/styled";
import {
  Container,
  Basic,
  AvatarContainer,
  Bar,
  WorkExperience,
} from "./styleComponents";
import { useAuth } from "../auth/context/auth-context";
import Avatar from "../../components/Avatar";

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
      </Basic>
      <WorkExperience>right</WorkExperience>
    </Container>
  );
}

export default Profile;
