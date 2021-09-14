import React from "react";
import { Modal as AntdModal } from "antd";

interface ModalProps {
  title: string;
  cancelHandler: (param: any) => void;
  confirmHandler: (param: any) => void;
  width?: number;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { title, children, cancelHandler, confirmHandler, width = 500 } = props;
  return (
    <AntdModal
      title={title}
      visible={true}
      onOk={confirmHandler}
      onCancel={cancelHandler}
      width={width}
      bodyStyle={{ overflowX: "auto", height: "500px" }}
    >
      {children}
    </AntdModal>
  );
};

export default Modal;
