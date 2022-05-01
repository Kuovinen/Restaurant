import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import { Provider } from "react-redux";
import allReducer from "./reducers/allReducer.js";
import { createStore } from "redux";

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
