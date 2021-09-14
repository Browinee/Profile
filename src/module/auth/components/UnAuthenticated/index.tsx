import React from "react";
import Login from "../../../../components/Login";
import { Card } from "antd";
import styled from "@emotion/styled";
import useDocumentTitle from "../../../../hooks/useDocumentTitle";
import { useAuth } from "../../context/auth-context";
import Highlight from "../../../../components/Highlight";

interface LoginProps {
  username: string;
  password: string;
}

const UnAuthenticatedApp = () => {
  const { login, errorMsg, isLoading } = useAuth();
  const loginHandler = async (value: LoginProps) => {
    await login(value);
  };
  useDocumentTitle("Please login in to continue.", false);

  return (
    <Container>
      <Header />
      <ShadowCard>
        <Title>Login</Title>
        {errorMsg ? <Highlight> {errorMsg}</Highlight> : null}
        <Login login={loginHandler} isLoading={isLoading} />
      </ShadowCard>
    </Container>
  );
};

export default UnAuthenticatedApp;

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;
const Header = styled.header`
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
