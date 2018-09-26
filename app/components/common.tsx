import * as React from "react";
import { Store } from "../states/Store";
import { Style } from "./style";

const button = Style.registerStyle({ border: "none", fontSize: "1rem" });

export interface BaseProps {
    store: Store;
}

export const Button: React.SFC<React.HTMLAttributes<HTMLButtonElement>> = (props) =>
    <button {...props} className={button}>{props.children}</button>;
