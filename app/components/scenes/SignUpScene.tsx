import * as React from "react";
import { observer } from "mobx-react";
import { center, scene } from "../style";
import { Button, BaseProps } from "../Common";

export const SignUpScene = observer(({store}: BaseProps) => (
    <div className={scene}>
        <span style={center({top: "30%", height: "2em"}, {fontSize: "2em"})}>サインアップ</span>
        <span style={center({top: "40%", height: "1.5em"}, {fontSize: "1em"})}>ユーザー名を決めてください</span>
        <input style={center({top: "45%", height: "1.5em", width: "10em"}, {fontSize: "1em"})} onChange={(ev) => store.User.name = ev.target.value}/>
        <Button style={center({top: 60, height: 10, width: "10em"}, {background: "red"})}
            onClick={() => store.User.name ? store.SceneManager.goto("home") : alert("ユーザー名を入力してください")}>決定</Button>
    </div>
));
