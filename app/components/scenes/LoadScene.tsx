import * as React from "react";
import { observer } from "mobx-react";
import { center, scene } from "../style";
import { BaseProps } from "../Common";

export const LoadScene = observer(({store}: BaseProps) => {
    if (!store.loadState) store.load();
    if (store.loadState === "loaded") {
        store.SceneManager.goto(store.User.name ? "home" : "signup");
        return <div></div>;
    } else {
        const tip = store.SceneManager.loadingTip;
        return (
            <div className={scene} style={{background: "#ffc"}}>
                {tip ?
                    <div>
                        <div onClick={() => store.SceneManager.refleshTip()} style={center({top: "50%", height: "70%", width: "20em"}, {position: "absolute", color: "#666", background: "#fff", fontSize: "1.1em", borderRadius: "0.5em"})}>
                            <div style={{padding: "1.5em 1em 1em 1em"}}>{tip.content}</div>
                        </div>
                        <div style={center({top: "15%", height: "2em", width: "15em"}, {position: "absolute", color: "#966", background: "#fcc", fontSize: "1.2em", borderRadius: "0.5em"})}>
                            {tip.title}
                        </div>
                    </div>
                    : ""
                }
                <span style={center({bottom: "8%", right: "10%", width: "7em", height: "2em"}, {position: "absolute", fontSize: "1.5em"})}>Loading...</span>
            </div>
        );
    }
});
