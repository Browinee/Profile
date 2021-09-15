import Modal from "../../../../../components/Modal";
import { Form, Input } from "antd";
import React from "react";

interface BasicFormProps {
  basicInfo: {
    age: number;
    github: string;
    name: string;
    email: string;
  };
  cancelHandler: () => void;
  confirmHandler: (value: any) => void;
}

const BasicForm = (props: BasicFormProps) => {
  const { cancelHandler, confirmHandler, basicInfo } = props;
  const [form] = Form.useForm();
  form.setFieldsValue(basicInfo);
  const onCancelHandler = () => {
    cancelHandler();
  };
  const onConfirmHandler = async () => {
    try {
      await form.validateFields();
      const newInfo = form.getFieldsValue();
      confirmHandler(newInfo);
      cancelHandler();
    } catch (e) {
      console.error("Form error", e);
    }
  };
  return (
    <Modal
      title={"Basic Info"}
      cancelHandler={onCancelHandler}
      confirmHandler={onConfirmHandler}
    >
      <Form form={form} initialValues={basicInfo}>
        <Form.Item
          name={"name"}
          rules={[{ required: true, message: "Please enter name" }]}
        >
          <Input placeholder={"Name"} type="text" id={"name"} />
        </Form.Item>
        <Form.Item
          name={"age"}
          rules={[{ required: true, message: "Please enter age" }]}
        >
          <Input placeholder={"Age"} type="number" id={"age"} />
        </Form.Item>
        <Form.Item
          name={"email"}
          rules={[
            { required: true, message: "Please enter email" },
            {
              type: "email",
            },
          ]}
        >
          <Input placeholder={"Email"} type="email" id={"email"} />
        </Form.Item>
        <Form.Item
          name={"github"}
          rules={[
            { required: true, message: "Please enter github" },
            {
              type: "url",
            },
          ]}
        >
          <Input placeholder={"Github"} type="text" id={"github"} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default BasicForm;
