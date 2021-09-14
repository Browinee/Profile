import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import Modal from "../../../../../components/Modal";
import { Button, Form, Input } from "antd";
import React, { useCallback, useState } from "react";
import styled from "styled-components";

interface SummaryFormProps {
  summary: string[];
  cancelHandler: () => void;
  confirmHandler: (value: any) => void;
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
    cancelHandler();
  };
  const onConfirmHandler = async () => {
    try {
      confirmHandler({ summary: formData });
      cancelHandler();
    } catch (e) {
      console.error("Form error", e);
    }
  };
  const changeHandler =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const copyFormData = [...formData];
      copyFormData.splice(index, 1, value);
      setFormData(copyFormData);
    };
  const removeFields =
    (index: number) => (e: React.MouseEvent<HTMLElement>) => {
      const copyFormData = [...formData];
      copyFormData.splice(index, 1);
      setFormData(copyFormData);
    };
  const addFields = useCallback(() => {
    setFormData((prev) => ["", ...prev]);
  }, [setFormData]);
  return (
    <Modal
      title={"Summary"}
      cancelHandler={onCancelHandler}
      confirmHandler={onConfirmHandler}
    >
      <Form form={form} initialValues={summary}>
        <Button
          type="dashed"
          onClick={addFields}
          style={{ marginBottom: "20px" }}
          icon={<PlusOutlined />}
        >
          Add new summary at head
        </Button>
        {formData.map((data, idx) => {
          return (
            // refactor: give every fields a unique key value, not use id
            // becuase here we add before not after, and may cause update and create
            <Form.Item key={idx}>
              <FieldWrapper>
                <Input
                  value={data}
                  placeholder={"Please enter your summary"}
                  type="text"
                  onChange={changeHandler(idx)}
                />
                <MinusCircleOutlined size={30} onClick={removeFields(idx)} />
              </FieldWrapper>
            </Form.Item>
          );
        })}
      </Form>
    </Modal>
  );
};

export default SummaryForm;
