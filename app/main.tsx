import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./components/App";
import { Store } from "./states/Store";
import { Style } from "./components/style";

const store = new Store();

document.getElementById("style")!.textContent = Style.getStyles();

ReactDOM.render(<App store={store}/>, document.getElementById("main"));
