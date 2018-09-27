import * as React from "react";
import { observer } from "mobx-react";
import { center, scene } from "../style";
import { Button, BaseProps } from "../Common";

export const LoadScene = observer(({store}: BaseProps) => {
    if (!store.loadState) store.load();
    if (store.loadState === "loaded") {
        store.SceneManager.goto(store.User.name ? "home" : "signup");
        return <div></div>;
    } else {
        return (
            <div className={scene}>
                <span style={center({top: "50%", height: "2em"}, {fontSize: "2em"})}>Loading...</span>
            </div>
        );
    }
});
