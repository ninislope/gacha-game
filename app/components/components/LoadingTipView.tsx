import * as React from "react";
import { observer } from "mobx-react";
import { center, Style } from "../style";
import { LoadManager } from "../../states/Runtime/LoadManager";

const contentStyle = Style.registerStyle({
    ...center({top: "50%", height: "70%", width: "20em"}),
    position: "absolute",
    color: "#666",
    background: "#fff",
    fontSize: "1.1em",
    borderRadius: "0.5em",
});

const contentTextStyle = Style.registerStyle({padding: "1.5em 1em 1em 1em"});

const titleStyle = Style.registerStyle({
    ...center({top: "15%", height: "2em", width: "15em"}),
    position: "absolute",
    color: "#966",
    background: "#fcc",
    fontSize: "1.2em",
    borderRadius: "0.5em",
});

const loadingStyle = Style.registerStyle({
    ...center({bottom: "8%", right: "10%", width: "7em", height: "2em"}),
    position: "absolute",
    fontSize: "1.5em",
});

export const LoadingTipView = observer(({loadManager}: {loadManager: LoadManager}) =>
    loadManager.loadingTip ?
    <div>
        <div onClick={() => loadManager.refleshTip()} className={contentStyle}>
            <div className={contentTextStyle}>{loadManager.loadingTip.content}</div>
        </div>
        <div className={titleStyle}>
            {loadManager.loadingTip.title}
        </div>
        <span className={loadingStyle}>Loading...</span>
    </div>
    : <span></span>
);
