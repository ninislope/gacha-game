import * as React from "react";
import { observer } from "mobx-react";
import { scene, Style } from "../style";
import { BaseProps } from "../Common";
import { SceneId } from "../../states/Runtime/SceneManager";

const titleBarStyle = Style.registerStyle({
    position: "absolute",
    fontSize: "2rem",
    top: 0,
    left: "-0.5em",
    paddingLeft: "0.5em",
    width: "40%",
    height: "3rem",
    transform: "skewX(-30deg)",
    background: "#fcc",
});

const titleBarContentStyle = Style.registerStyle({
    transform: "skewX(30deg)",
});

const titleStyle = Style.registerStyle({
    fontSize: "1em",
    padding: "0.3em",
});

const backButtonStyle = Style.registerStyle({
    fontSize: "1em",
    background: "#ff3",
    border: "none",
    cursor: "pointer",
});

const infoBarStyle = Style.registerStyle({
    position: "absolute",
    fontSize: "1.2rem",
    lineHeight: "2rem",
    top: 0,
    right: "0em",
    width: "40%",
    height: "2rem",
    background: "transparent",
    padding: "0.5em",
});

const userNameStyle = Style.registerStyle({
    fontWeight: "bold",
    color: "#933",
    textShadow: "#999 0.05em 0.05em",
    padding: "0.5em",
});

const gemStyle = Style.registerStyle({
    fontWeight: "bold",
    color: "#cc6",
    background: "#ffd",
    padding: "0.5em",
});

export interface UISceneProps extends BaseProps {
    title: string;
    hideHomeButton?: boolean;
    backTo?: SceneId;
    backEffect?: boolean;
}

export const UIScene: React.SFC<UISceneProps> = observer(({store, title, hideHomeButton, children, backTo, backEffect}: UISceneProps) => (
    <div className={scene}>
        <div className={titleBarStyle}>
            <div className={titleBarContentStyle}>
                {hideHomeButton ? "" : <button className={backButtonStyle} onClick={() => store.SceneManager.goto(backTo || "home", backEffect === false ? null : false)}>⮜</button>}
                <span className={titleStyle}>{title}</span>
            </div>
        </div>
        <div className={infoBarStyle}>
            <span className={userNameStyle}>{store.User.name}</span>
            <span className={gemStyle}>石:{(store.User.gem || {amount: 0}).amount}</span>
            <span className={gemStyle}>コイン:{(store.User.coin || {amount: 0}).amount}</span>
        </div>
        {children}
    </div>
));
