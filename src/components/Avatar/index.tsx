import React, { useCallback } from "react";
import styled from "styled-components";
import { Avatar as AntdAvatar, Button, Upload } from "antd";
import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/lib/upload/interface";
import { getBase64 } from "../../utils/base64";

interface AvatarProps {
  imageUrl: string;
  updateImage?: (imageUrl: any) => void;
  size?: number;
}

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Block = styled.div`
  height: 8px;
`;
function Avatar(props: AvatarProps) {
  const { size = 120, imageUrl, updateImage = () => {} } = props;
  const changeHandler = (info: UploadChangeParam) => {
    getBase64(info.file.originFileObj, (imageUrl) => updateImage(imageUrl));
  };
  return (
    <Container>
      <AntdAvatar size={size} src={imageUrl ? imageUrl : <UserOutlined />} />
      {/*<Block />*/}
      {/*<Upload*/}
      {/*  name="file"*/}
      {/*  onChange={changeHandler}*/}
      {/*  showUploadList={false}*/}
      {/*  action=""*/}
      {/*>*/}
      {/*  <Button icon={<UploadOutlined />}>Click to Upload</Button>*/}
      {/*</Upload>*/}
    </Container>
  );
}

export default Avatar;
