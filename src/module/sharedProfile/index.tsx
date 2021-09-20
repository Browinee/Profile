import React from "react";
import {Route, Switch} from "react-router-dom";
import Profile from "./Profile";

function SharedProfile() {
    return (
        <Switch>
            <Route exact path={"/shared/:id"}>
                <Profile />
            </Route>
        </Switch>
    );
}

export default SharedProfile;
