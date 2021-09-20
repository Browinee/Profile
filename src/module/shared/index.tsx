import React from "react";
import {Route, Switch} from "react-router-dom";
import SharedProfile from "./SharedProfile";

function Shared() {
    return (
        <Switch>
            <Route exact path={"/shared/:id"}>
                <SharedProfile />
            </Route>
        </Switch>
    );
}

export default Shared;
