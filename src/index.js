import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store, {persistor} from "./store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <App />
      </PersistGate>
  </Provider>,
  document.getElementById("root")
);
