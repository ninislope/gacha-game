import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./components/App";
import { Store } from "./states/Store";
import { Style } from "./components/style";

const store = new Store();

document.getElementById("style")!.textContent = Style.getStyles();

const main = document.getElementById("main") as HTMLElement;

const resize = () => document.getElementsByTagName("html")[0].style.fontSize = `${main.clientHeight / 30}px`;
window.addEventListener("resize", resize);
resize();

ReactDOM.render(<App store={store}/>, main);
