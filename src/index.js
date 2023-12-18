import React from "react";
// import ReactDOM from "react-dom/client";
// import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import configureAppStore from "./store";
import "./styles.css";
import App from "./App";

const store = configureAppStore();
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// const renderApp = () =>
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     document.getElementById("root")
//   );

// if (process.env.NODE_ENV !== "production" && module.hot) {
//   module.hot.accept("./App", renderApp);
// }

// renderApp();
