import React from "react";
import styled from "styled-components";
import {Redirect, Route, Switch} from "react-router-dom";
import Profile from "../../../profile";

const Container = styled.div`
    width: 100%;
    max-width: 1366px;
    height: 100vh;
`;

const Authenticated = () => {
    return (
        <Container>
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
