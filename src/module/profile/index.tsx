import {
  AvatarContainer,
  Bar,
  Basic,
  BasicInfo,
  Container,
  WorkExperience,
} from "./components/styleComponents";
import { useAuth } from "../auth/context/auth-context";
import Avatar from "../../components/Avatar";
import InfoBlock from "./components/infoBlock";
import Summary from "./components/summary";
import { Divider } from "antd";
import Experience from "./components/Experience";
import { User } from "../../types/user";

function Profile() {
  const { user, updateUser } = useAuth();
  const updateImageHandler = (imageUrl: string) => {
    const newUserData = {
      ...user,
      avatar: imageUrl,
    } as User;
    updateUser(newUserData);
  };
  console.log("user", user);
  return (
    <Container>
      <Basic>
        <AvatarContainer>
          <Avatar
            imageUrl={user?.avatar || ""}
            updateImage={updateImageHandler}
            upload
          />
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
