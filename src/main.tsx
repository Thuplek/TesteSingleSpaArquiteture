import React from "react";
import App from "./App.tsx";
import "./index.css";
import singleSpaReact from "single-spa-react";

import ReactDOM from "react-dom";

const reactlifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter: () => document.getElementById("ul_main"),
});

export const bootstrap = [reactlifecycles.bootstrap];

export const mount = [reactlifecycles.mount];

export const unmount = [reactlifecycles.unmount];
