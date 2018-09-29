import * as React from "react";
import { observer } from "mobx-react";
import { center, scene } from "../style";
import { NormalButton, BaseProps } from "../Common";
import { Store } from "../../states/Store";
import { UserActor } from "../../states/UserData/UserActor";
import { UserState } from "../../states/UserData/UserState";
import { UserItem } from "../../states/UserData/UserItem";

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
                userStates: [new UserState({stateId: 1005, curable: true})],
            }),
        );
        store.User.userItems.push(
            new UserItem({itemId: 1, amount: 10}),
            new UserItem({itemId: 10, amount: 100}),
            new UserItem({itemId: 1001, amount: 5}),
        );
    } else {
        alert("ユーザー名を入力してください");
    }
}

export const SignUpScene = observer(({store}: BaseProps) => {
    if (store.User.name && store.User.userActors.length) {
        store.SceneManager.goto("home");
        return <div/>;
    }
    return (
        <div className={scene}>
            <span style={center({top: "30%", height: "2em"}, {position: "absolute", fontSize: "2em"})}>サインアップ</span>
            <span style={center({top: "40%", height: "1.5em"}, {position: "absolute", fontSize: "1em"})}>ユーザー名を決めてください</span>
            <input style={center({top: "45%", height: "1.5em", width: "10em"}, {position: "absolute", fontSize: "1em"})} onChange={(ev) => store.User.name = ev.target.value}/>
            <NormalButton top={60} background="red"
                onClick={() => signUp(store)}>決定</NormalButton>
        </div>
    );
});
