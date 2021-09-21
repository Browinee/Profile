import React, {useCallback, useState} from "react";
import styled from "styled-components";
import {useAuth} from "../../../auth/context/auth-context";
import {Button, Form, notification} from "antd";
import {down} from "styled-breakpoints";
import Modal from "../../../../components/Modal";
import VanityUrlForm from "../VanityUrlForm";

const Container = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    width: 100%;
    background: white;
    border-bottom: 1px solid rgb(198, 198, 198);
    height: 6rem;
    z-index: 2;
    padding: 1rem 2rem;
    max-width: 1366px;

    > button {
        margin-right: 1rem;
    }

    ${down("md")} {
        justify-content: center;
    }
`;
const getSharedLink = (path: string) => {
    const url = `${window.location.origin}/#/shared/${path}`;
    return (
        <a target={"_blank"} href={url} rel="noreferrer">
            {url}
        </a>
    );
};
const Header = () => {
    const {logout, createVanityUrlInfo} = useAuth();
    const [isModal, setIsModal] = useState(false);
    const shareLinkHandler = useCallback(() => {
        setIsModal(true);
    }, [setIsModal]);
    const [formRef] = Form.useForm();
    const confirmHandler = async () => {
        try {
            await formRef.validateFields();
            const value = formRef.getFieldsValue();
            createVanityUrlInfo(value);
            setIsModal(false);
            formRef.resetFields();
            notification.open({
                message: "Shared Link",
                description: getSharedLink(value.id),
            });
        } catch (e) {}
    };
    const cancelHandler = () => {
        setIsModal(false);
        formRef.resetFields();
    };
    return (
        <Container>
            <Button onClick={logout} shape="round">
                Logout
            </Button>

            <Button onClick={shareLinkHandler} shape="round">
                Share Link
            </Button>
            {isModal && (
                <Modal height={250} title={"Share link"} confirmHandler={confirmHandler} cancelHandler={cancelHandler}>
                    <VanityUrlForm formRef={formRef} />
                </Modal>
            )}
        </Container>
    );
};

export default Header;
