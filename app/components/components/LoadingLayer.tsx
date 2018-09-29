import * as React from "react";
import { observer } from "mobx-react";
import { center, Style } from "../style";
import { BaseProps } from "../Common";
import { LoadingTipView } from "./LoadingTipView";

const layer = Style.registerStyle({
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 10000,
});

const forwardInKeyFrame = Style.registerKeyframes({ from: { left: "100%" }, to: { left: "0%" } });
const forwardOutKeyFrame = Style.registerKeyframes({ from: { left: "0%" }, to: { left: "-100%" } });
const backInKeyFrame = Style.registerKeyframes({ from: { left: "-100%" }, to: { left: "0%" } });
const backOutKeyFrame = Style.registerKeyframes({ from: { left: "0%" }, to: { left: "100%" } });

const forwardIn = Style.registerStyle({ animation: `${forwardInKeyFrame} 150ms ease-out forwards` });
const forwardOut = Style.registerStyle({ animation: `${forwardOutKeyFrame} 150ms ease-out forwards` });
const backIn = Style.registerStyle({ animation: `${backInKeyFrame} 150ms ease-out forwards` });
const backOut = Style.registerStyle({ animation: `${backOutKeyFrame} 150ms ease-out forwards` });
const hidden = Style.registerStyle({ left: "100%" });

export const LoadingLayer = observer(({store}: BaseProps) => {
        const loadManager = store.LoadManager;
        const sceneManager = store.SceneManager;
        if (sceneManager.forward === null) return <div className={hidden}/>;
        if (sceneManager.sceneId === sceneManager.nextSceneId) {
            return <div style={{background: "#f9f"}} className={`${layer} ${sceneManager.forward ? forwardOut : backOut}`}></div>
        } else {
            return (
                <div style={{background: "#f9f"}} className={`${layer} ${sceneManager.forward ? forwardIn : backIn}`}>
                    {
                        loadManager.loading ?
                        <LoadingTipView loadManager={loadManager}/> : ""}
                </div>
            );
        }
});
