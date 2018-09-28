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

export interface UISceneProps extends BaseProps {
    title: string;
    hideHomeButton?: boolean;
    backTo?: SceneId;
}

export const UIScene: React.SFC<UISceneProps> = observer(({store, title, hideHomeButton, children, backTo}: UISceneProps) => (
    <div className={scene}>
        <div className={titleBarStyle}>
            <div className={titleBarContentStyle}>
                {hideHomeButton ? "" : <button className={backButtonStyle} onClick={() => store.SceneManager.goto(backTo || "home")}>⮜</button>}
                <span className={titleStyle}>{title}</span>
            </div>
        </div>
        {children}
    </div>
));
