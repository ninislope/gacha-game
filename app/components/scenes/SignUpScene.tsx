import * as React from "react";
import { observer } from "mobx-react";
import { center, scene } from "../style";
import { NormalButton, BaseProps } from "../Common";
import { Store } from "../../states/Store";
import { UserActor } from "../../states/UserData/UserActor";
import { UserState } from "../../states/UserData/UserState";

function signUp(store: Store) {
    if (store.User.name) {
        store.User.userActors.push(
            new UserActor({
                actorId: 1,
                level: 1,
                userStates: [new UserState({stateId: 1002, curable: true})],
            }),
            new UserActor({
                actorId: 2,
                level: 1,
                userStates: [new UserState({stateId: 1002, curable: true})],
            }),
        );
        store.SceneManager.goto("home");
    } else {
        alert("ユーザー名を入力してください");
    }
}

export const SignUpScene = observer(({store}: BaseProps) => (
    <div className={scene}>
        <span style={center({top: "30%", height: "2em"}, {position: "absolute", fontSize: "2em"})}>サインアップ</span>
        <span style={center({top: "40%", height: "1.5em"}, {position: "absolute", fontSize: "1em"})}>ユーザー名を決めてください</span>
        <input style={center({top: "45%", height: "1.5em", width: "10em"}, {position: "absolute", fontSize: "1em"})} onChange={(ev) => store.User.name = ev.target.value}/>
        <NormalButton top={60} background="red"
            onClick={() => signUp(store)}>決定</NormalButton>
    </div>
));
