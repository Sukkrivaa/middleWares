import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import App from "components/App";
import Root from "Root";

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path="/" component={App} /> 
        </BrowserRouter>
    </Root>
, document.querySelector("#root"));
{/**The history props is added to all our components with under ROUTE */}
/*Basically tells you under what routes (starting with "/") will this App be available - inside the App we can go more s pecific with cerain subcomponents being shown only under certain routes */