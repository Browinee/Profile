import { MinusCircleOutlined } from "@ant-design/icons";
import Modal from "../../../../../components/Modal";
import { User } from "../../../../../types/user";
import { Form, Input } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

interface SummaryFormProps {
  summary: string[];
  cancelHandler: () => void;
  confirmHandler: (user: User) => void;
}

const FieldWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    display: inline-block;
    margin-left: 1rem;
  }
`;
const SummaryForm = (props: SummaryFormProps) => {
  const { cancelHandler, confirmHandler, summary } = props;
  const [formData, setFormData] = useState(summary);
  const [form] = Form.useForm();
  const onCancelHandler = () => {
    console.log("form", form.getFieldsValue());
    // cancelHandler();
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
  const changeHandler =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("index", { index, vlaue: e.target.value });
    };
  return (
    <Modal
      title={"Summary"}
      cancelHandler={onCancelHandler}
      confirmHandler={onConfirmHandler}
    >
      <Form form={form} initialValues={summary}>
        {formData.map((data, idx) => {
          console.log("data", data);
          return (
            <Form.Item key={data}>
              <FieldWrapper>
                <Input
                  value={data}
                  placeholder={"Please enter your summary"}
                  type="text"
                  onChange={changeHandler(idx)}
                />
                <MinusCircleOutlined size={30} onClick={() => {}} />
              </FieldWrapper>
            </Form.Item>
          );
        })}
      </Form>
    </Modal>
  );
};

export default SummaryForm;
