import React, { Suspense } from "react";
import "./App.css";
import GlobalStyle from "./theme/globalStyles";
import ResetStyle from "./theme/resestStyles";
import styled from "styled-components";
import { ErrorBoundary } from "./components/ErrorBoundary";
import FullPageErrorFallback from "./components/FullPageErrorFallback";
import Loading from "./components/Loading";
import { useAuth } from "./module/auth/context/auth-context";
import UnAuthenticatedApp from "./module/auth/components/UnAuthenticated";
import Authenticated from "./module/auth/components/Authenticated";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
`;

function App() {
  const { user } = useAuth();
  return (
    <ErrorBoundary fallbackRender={FullPageErrorFallback}>
      <Suspense fallback={<Loading />}>
        <Container className="App">
          <ResetStyle />
          <GlobalStyle />
          {user ? <Authenticated /> : <UnAuthenticatedApp />}
        </Container>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
