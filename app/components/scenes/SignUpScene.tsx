import * as React from "react";
import { observer } from "mobx-react";
import { center, scene } from "../style";
import { NormalButton, BaseProps } from "../Common";

export const SignUpScene = observer(({store}: BaseProps) => (
    <div className={scene}>
        <span style={center({top: "30%", height: "2em"}, {position: "absolute", fontSize: "2em"})}>サインアップ</span>
        <span style={center({top: "40%", height: "1.5em"}, {position: "absolute", fontSize: "1em"})}>ユーザー名を決めてください</span>
        <input style={center({top: "45%", height: "1.5em", width: "10em"}, {position: "absolute", fontSize: "1em"})} onChange={(ev) => store.User.name = ev.target.value}/>
        <NormalButton top={60} background="red"
            onClick={() => store.User.name ? store.SceneManager.goto("home") : alert("ユーザー名を入力してください")}>決定</NormalButton>
    </div>
));
