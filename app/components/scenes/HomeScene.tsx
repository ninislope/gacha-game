import * as React from "react";
import { observer } from "mobx-react";
import { center } from "../style";
import { Button, BaseProps } from "../Common";
import { UIScene } from "./UIScene";

export const HomeScene = observer(({store}: BaseProps) => (
    <UIScene title="ホーム" store={store} hideHomeButton={true}>
        <Button style={center({top: 70, left: 30, height: "4em", width: "4em"}, {fontSize: "2em", background: "#ff3"})}
            onClick={() => store.SceneManager.goto("gacha")}>ガチャ</Button>
        <Button style={center({top: 70, left: 50, height: "4em", width: "4em"}, {fontSize: "2em", background: "#ff3"})}
            onClick={() => store.SceneManager.goto("gacha")}>闘技場</Button>
    </UIScene>
));
