import React, {Suspense, useCallback, useEffect, useMemo, useState} from "react";
import "./App.css";
import GlobalStyle from "./theme/globalStyles";
import ResetStyle from "./theme/resestStyles";
import styled from "styled-components";
import {ErrorBoundary} from "./components/ErrorBoundary";
import FullPageErrorFallback from "./components/FullPageErrorFallback";
import Loading from "./components/Loading";
import {useAuth} from "./module/auth/context/auth-context";
import UnAuthenticatedApp from "./module/auth/components/UnAuthenticated";
import Authenticated from "./module/auth/components/Authenticated";
import Modal from "./components/Modal";
import {Button, message} from "antd";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: lightgrey;
    display: flex;
    justify-content: center;
`;

const NetworkMsg = styled.div`
    text-align: center;
`;

function App() {
    const {user, syncUser} = useAuth();
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [isModal, setIsModal] = useState(false);

    const setOnline = useCallback(() => {
        setIsOnline(true);
        setIsModal(true);
    }, []);
    const setOffline = useCallback(() => {
        setIsModal(true);
        setIsOnline(false);
    }, []);
    const toggleModal = useCallback(() => {
        setIsModal(prev => !prev);
        isOnline &&
            Promise.resolve(syncUser()).then(() => {
                return message.success("Finish sync.");
            });
    }, [setIsModal, isOnline, syncUser]);

    useEffect(() => {
        window.addEventListener("offline", setOffline);
        window.addEventListener("online", setOnline);

        return () => {
            window.removeEventListener("offline", setOffline);
            window.removeEventListener("online", setOnline);
        };
    }, []);
    const ModalFooter = useMemo(() => {
        return <Button onClick={toggleModal}>OK</Button>;
    }, [isOnline]);
    return (
        <ErrorBoundary fallbackRender={FullPageErrorFallback}>
            <Suspense fallback={<Loading />}>
                <Container className="App">
                    <ResetStyle />
                    <GlobalStyle />
                    {user ? <Authenticated /> : <UnAuthenticatedApp />}
                    {isModal && (
                        <Modal
                            height={100}
                            title={isOnline ? "Online" : "Offline"}
                            cancelHandler={toggleModal}
                            footer={ModalFooter}
                        >
                            <NetworkMsg>
                                {isOnline
                                    ? "Network recover. Begin to sync data."
                                    : "Offline now. User could still modify data, and data would be synced once network recovers."}
                            </NetworkMsg>
                        </Modal>
                    )}
                </Container>
            </Suspense>
        </ErrorBoundary>
    );
}

export default App;
