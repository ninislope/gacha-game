import * as React from "react";
import { observer } from "mobx-react";
import { center } from "../style";
import { Button, BaseProps } from "../Common";
import { UIScene } from "./UIScene";

export const GachaScene = observer(({store}: BaseProps) => (
    <UIScene title="ガチャ" store={store}>
        <Button style={center({top: 70, left: 30, height: "4em", width: "4em"}, {fontSize: "2em", background: "#ff3"})}
            onClick={() => store.SceneManager.goto("home")}>ガチャ</Button>
        <Button style={center({top: 70, left: 50, height: "4em", width: "4em"}, {fontSize: "2em", background: "#f33"})}
            onClick={() => store.SceneManager.goto("gacha")}>闘技場</Button>
    </UIScene>
));
