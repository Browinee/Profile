import React, {ReactNode} from "react";
import {Modal as AntdModal} from "antd";

interface ModalProps {
    title: string;
    cancelHandler?: (param: any) => void;
    confirmHandler?: (param: any) => void;
    width?: number;
    footer?: ReactNode;
    height?: number;
}

const Modal: React.FC<ModalProps> = props => {
    const {height = 500, title, children, cancelHandler = () => {}, confirmHandler = () => {}, width = 500, footer} = props;
    return (
        <AntdModal
            title={title}
            visible={true}
            onOk={confirmHandler}
            onCancel={cancelHandler}
            width={width}
            bodyStyle={{overflowX: "auto", height: `${height}px`}}
            footer={footer}
            maskClosable={false}
        >
            {children}
        </AntdModal>
    );
};

export default Modal;
