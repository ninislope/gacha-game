import * as React from "react";
import { observer } from "mobx-react";
import { center, scene } from "../style";
import { Button, BaseProps } from "../common";

export const HomeScene = observer(({store}: BaseProps) => (
    <div className={scene}>
        <span className="title" style={center({top: "30%", height: "1.5em"}, {fontSize: "2em"})}>home</span>
        <Button style={center({top: 70, left: 30, height: "4em", width: "4em"}, {fontSize: "2em", background: "#ff3"})}
            onClick={() => store.SceneManager.goto("gacha")}>ガチャ</Button>
        <Button style={center({top: 70, left: 50, height: "4em", width: "4em"}, {fontSize: "2em", background: "#ff3"})}
            onClick={() => store.SceneManager.goto("gacha")}>闘技場</Button>
    </div>
));
