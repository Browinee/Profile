import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import SharedProfile from "./SharedProfile";
import {SharedProvider} from "./context/shared-context";

function Shared() {
    return (
        <SharedProvider>
            <Switch>
                <Route path={"/shared/:id"}>
                    <SharedProfile />
                </Route>
                <Redirect to="/notfound" />
            </Switch>
        </SharedProvider>
    );
}

export default Shared;
