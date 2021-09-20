import React from "react";
import styled from "styled-components";
import {Redirect, Route, Switch} from "react-router-dom";
import Profile from "../../../profile";
import Header from "../../../profile/components/Header";
import {useAuth} from "../../context/auth-context";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

const Authenticated = () => {
    const {logout} = useAuth();
    return (
        <Container>
            <Header logout={logout} />
            <Switch>
                <Route path={"/profile"}>
                    <Profile />
                </Route>
                <Redirect to="/profile" />
            </Switch>
        </Container>
    );
};

export default Authenticated;
