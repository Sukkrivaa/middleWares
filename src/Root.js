import React from "react";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from "reducers"; //By default we will get the index.js file
// import reduxPromise from "redux-promise";
import async from "middlewares/async";
import stateValidator from "middlewares/stateValidator";

export default (/*props - we use es6 destructuring here */{children, initialState={}}) => {
    const store = createStore(reducers, initialState/*If we dont get an initial state, we will use the default empty object */
        ,applyMiddleware(async, stateValidator))
    return (
        <Provider store={store}>
            {children/*was initially props.children */}
        </Provider>
    )
}