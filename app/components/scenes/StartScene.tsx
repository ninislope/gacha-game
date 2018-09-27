import * as React from "react";
import { observer } from "mobx-react";
import { center, scene } from "../style";
import { Button, BaseProps } from "../Common";

export const StartScene = observer(({store}: BaseProps) => (
    <div className={scene}>
        <span className="title" style={center({top: "30%", height: "1.5em"}, {fontSize: "2em"})}>赤頭巾の闘技場</span>
        <Button style={center({top: 60, height: 10, width: "10em"}, {background: "red"})} onClick={() => store.SceneManager.goto("load")}>スタート</Button>
        <Button style={center({top: 85, right: 10, height: 10, width: "10em"}, {background: "red"})}
            onClick={() => { if (confirm("本当に消してよいですか？")) {store.destroy(); location.reload()}; }}>データ消去</Button>
    </div>
));
