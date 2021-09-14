import React, { useState } from "react";
import { Form, Input } from "antd";
import { LongButton } from "../Button";

interface SubmitProps {
  username: string;
  password: string;
}

interface LoginProps {
  login: (value: SubmitProps) => Promise<void>;
  isLoading: boolean;
}

export const Login = (props: LoginProps) => {
  const { login, isLoading } = props;
  const [initialValue] = useState({
    username: "admin",
    password: "admin",
  });
  const handleSubmit = async (values: SubmitProps) => {
    await login(values);
  };
  return (
    <Form onFinish={handleSubmit} initialValues={initialValue}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "Please enter username" }]}
      >
        <Input placeholder={"Username"} type="text" id={"username"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "Please enter password" }]}
      >
        <Input placeholder={"Password"} type="password" id={"password"} />
      </Form.Item>
      <Form.Item>
        <LongButton loading={isLoading} type="primary" htmlType="submit">
          Login
        </LongButton>
      </Form.Item>
    </Form>
  );
};

export default Login;
