import * as React from "react";
import { Store } from "../states/Store";
import { SceneId } from "../states/Runtime/SceneManager";
import { Style, CenterProps, center } from "./style";

const button = Style.registerStyle({
    position: "absolute",
    border: "none",
    cursor: "pointer",
    transform: "skewX(-30deg)",
});

const buttonText = Style.registerStyle({
    display: "block",
    transform: "skewX(30deg)",
});

export interface BaseProps {
    store: Store;
    children?: React.ReactNode;
}

export type Optional<T> = { [P in keyof T]+?: T[P] };

export interface ButtonProps extends Optional<CenterProps>, React.HTMLAttributes<HTMLDivElement> {
    relative?: boolean;
    fontSize?: string;
    color?: string;
    background?: string;
    bold?: boolean;
    goto?: SceneId;
}



export const Button: React.SFC<ButtonProps> = (props) =>
    <div {...props}
        className={button}
        style={{
            fontSize: props.fontSize || "1rem",
            lineHeight: props.height || "2rem",
            position: props.relative ? "relative" : "absolute",
            color: props.color || "#fff",
            background: props.background || "#f00",
            fontWeight: props.bold ? "bold" : (props.style || {}).fontWeight,
            ...center({height: "2rem", ...props} as CenterProps),
            ...(props.style || {}),
        }}>
        <div className={buttonText}>{props.children}</div>
    </div>;

export const SmallButton: React.SFC<ButtonProps> = (props) =>
    <Button width="8rem" height="2rem" {...props} style={{fontSize: "1rem", ...(props.style || {})}}>{props.children}</Button>

export const NormalButton: React.SFC<ButtonProps> = (props) =>
    <Button width="9rem" height="3rem" {...props} style={{fontSize: "1.2rem", ...(props.style || {})}}>{props.children}</Button>

export const LargeButton: React.SFC<ButtonProps> = (props) =>
    <Button width="11rem" height="4rem" {...props} style={{fontSize: "1.5rem", ...(props.style || {})}}>{props.children}</Button>
