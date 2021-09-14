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
import InfoBlock from "./components/InfoBlock";
import Summary from "./components/Summary";
import { Button, Divider, Upload } from "antd";
import Experience from "./components/Experience";
import { User } from "../../types/user";
import { FeatureToggle } from "../auth/auth";
import { PERMISSION_MAP } from "../auth/permissionList";
import { UploadOutlined } from "@ant-design/icons";
import React, { useCallback, useState } from "react";
import { UploadChangeParam } from "antd/lib/upload/interface";
import { getBase64 } from "../../utils/base64";
import { RESUME_MAPS } from "./constants";

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
  const changeHandler = (info: UploadChangeParam) => {
    getBase64(info.file.originFileObj, (imageUrl) =>
      updateImageHandler(imageUrl)
    );
  };
  const [modalType, setModalType] = useState("");
  const modalHandler = useCallback((type) => setModalType(type), []);
  const onClose = () => {
    setModalType("");
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
      {
        // modalType === RESUME_MAPS.basic && () => {}
        // modalType === RESUME_MAPS.summary && () => {}
        // modalType === RESUME_MAPS.experience && () => {}
      }
    </Container>
  );
}

export default Profile;
