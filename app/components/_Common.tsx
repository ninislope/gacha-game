import * as React from "react";
import { Store } from "../states/Store";
import { Style } from "./style";

const button = Style.registerStyle({
    position: "absolute",
    border: "none",
    fontSize: "1rem",
    cursor: "pointer",

});

export interface BaseProps {
    store: Store;
    children?: React.ReactNode;
}

export const Button: React.SFC<React.HTMLAttributes<HTMLButtonElement>> = (props) =>
    <button {...props} className={button}>{props.children}</button>;
