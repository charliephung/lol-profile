import React from "react";
import ReactDOM from "react-dom";
import App from "Component/App/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import * as serviceWorker from "./serviceWorker";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const ReduxConnectedApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(ReduxConnectedApp, document.getElementById("root"));

serviceWorker.unregister();
