import React from "react";
import { Form, Input } from "antd";
import { LongButton } from "../Button";
import useAsync from "../../hooks/useAsync";

interface SubmitProps {
  username: string;
  password: string;
}

interface LoginProps {
  login: (value: SubmitProps) => Promise<void>;
  onError: (error: Error | null) => void;
}

export const Login = (props: LoginProps) => {
  const { login, onError } = props;
  const { isLoading, run } = useAsync(undefined, { throwOnError: true });
  const handleSubmit = async (values: SubmitProps) => {
    try {
      await run(login(values));
    } catch (e) {
      onError(e as Error);
    }
  };

  return (
    <Form onFinish={handleSubmit}>
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
