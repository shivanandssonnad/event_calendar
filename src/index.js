import { StrictMode } from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from "./App";

import { STORE_INITIAL_STATE } from "./redux/constants";
import configureStore from "./redux/store";

const rootElement = document.getElementById("root");

ReactDOM.render(
<StrictMode>
    <Provider store={configureStore(STORE_INITIAL_STATE)}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
)
