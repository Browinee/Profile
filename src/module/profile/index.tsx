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
import { Button, Divider, Upload } from "antd";
import Experience from "./components/Experience";
import { User } from "../../types/user";
import { FeatureToggle } from "../auth/auth";
import { PERMISSION_MAP } from "../auth/permissionList";
import { UploadOutlined } from "@ant-design/icons";
import React, { useCallback } from "react";
import { UploadChangeParam } from "antd/lib/upload/interface";
import { getBase64 } from "../../utils/base64";

function Profile() {
  const { user, updateUser } = useAuth();
  const updateImageHandler = useCallback(
    (imageUrl: string) => {
      const newUserData = {
        ...user,
        avatar: imageUrl,
      } as User;
      updateUser(newUserData);
    },
    [user, updateUser]
  );
  console.log("user", user);
  const changeHandler = (info: UploadChangeParam) => {
    getBase64(info.file.originFileObj, (imageUrl) =>
      updateImageHandler(imageUrl)
    );
  };
  return (
    <Container>
      <Basic>
        <AvatarContainer>
          <FeatureToggle permissions={[PERMISSION_MAP.AVATAR_VIEW]}>
            <Avatar imageUrl={user?.avatar || ""} />
          </FeatureToggle>
          <FeatureToggle permissions={[PERMISSION_MAP.AVATAR_EDIT]}>
            <Upload
              name="file"
              onChange={changeHandler}
              showUploadList={false}
              action=""
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
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
  );
}

export default Profile;
