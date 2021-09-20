import React from "react";
import {Route, Switch} from "react-router-dom";
import SharedProfile from "./SharedProfile";
import {SharedProvider} from "./context/shared-context";

function Shared() {
    return (
        <Switch>
            <SharedProvider>
                <Route exact path={"/shared/:id"}>
                    <SharedProfile />
                </Route>
            </SharedProvider>
        </Switch>
    );
}

export default Shared;
