import React from "react";
import styled from "styled-components";
import {Avatar as AntdAvatar} from "antd";
import {UserOutlined} from "@ant-design/icons";

interface AvatarProps {
    imageUrl: string;
    updateImage?: (imageUrl: any) => void;
    size?: number;
}

const Container = styled.div`
    //display: inline-flex;
    //justify-content: center;
    //align-items: center;
    //flex-direction: column;
`;

function Avatar(props: AvatarProps) {
    const {size = 100, imageUrl} = props;

    return (
        <Container>
            <AntdAvatar size={size} src={imageUrl ? imageUrl : <UserOutlined />} style={{marginBottom: "0.5rem"}} />
        </Container>
    );
}

export default Avatar;
