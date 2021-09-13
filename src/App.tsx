import React, { Suspense } from "react";
import "./App.css";
import Search from "./module/Profile";
import GlobalStyle from "./theme/globalStyles";
import ResetStyle from "./theme/resestStyles";
import styled, { ThemeProvider } from "styled-components";
import THEME from "./theme/theme";
import { ErrorBoundary } from "./components/ErrorBoundary";
import FullPageErrorFallback from "./components/FullPageErrorFallback";
import Loading from "./components/Loading";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00324e;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <ErrorBoundary fallbackRender={FullPageErrorFallback}>
      <Suspense fallback={<Loading />}>
        <ThemeProvider theme={THEME}>
          <Container className="App">
            <ResetStyle />
            <GlobalStyle />
            <Search />
          </Container>
        </ThemeProvider>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
