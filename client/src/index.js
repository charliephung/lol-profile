import React from "react";
import ReactDOM from "react-dom";
import App from "Component/App/App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const ReduxConnectedApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(ReduxConnectedApp, document.getElementById("root"));

serviceWorker.unregister();
