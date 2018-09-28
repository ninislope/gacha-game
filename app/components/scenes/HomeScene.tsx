import * as React from "react";
import { observer } from "mobx-react";
import { LargeButton, BaseProps } from "../Common";
import { UIScene } from "./UIScene";
import { Style } from "../style";

const actor = Style.registerStyle({
    position: "absolute",
    bottom: "0%",
    left: "10%",
    height: "95%",
    background: "transparent",
    border: "none",
});

const stateList = Style.registerStyle({
    position: "absolute",
    bottom: "0%",
    left: "2%",
    height: "90%",
    listStyle: "none",
    margin: 0,
    padding: 0,
});
const stateItem = Style.registerStyle({
    padding: 0,
    fontSize: "1.3rem",
    textShadow: "#f0f 0.1em 0.1em 0.2em",
});

export const HomeScene = observer(({store}: BaseProps) => (
    <UIScene title="ホーム" store={store} hideHomeButton={true}>
        <ul className={stateList}>
            {
                store.User.userActors[store.sceneStates.home.userActorIndex].userStates.map((userState) =>
                    <li className={stateItem}>{userState.state.name}</li>
                )
            }
        </ul>
        <img
            className={actor}
            onClick={() => store.sceneStates.home.nextUserActor()}
            src={`resources/images/Actor/${store.User.userActors[store.sceneStates.home.userActorIndex].actorId}.png`}
            />
        <LargeButton top={60} right={37} width="6em" bold={true} background="#f90" onClick={store.callGoto("gacha")}>ガチャ</LargeButton>
        <LargeButton top={60} right={15} width="6em" bold={true} background="#66f" onClick={store.callGoto("gacha")}>クエスト</LargeButton>
        <LargeButton top={80} right={37} width="6em" bold={true} background="#3c3" onClick={store.callGoto("gacha")}>治療</LargeButton>
        <LargeButton top={80} right={15} width="6em" bold={true} background="#f66" onClick={store.callGoto("gacha")}>ヒロイン</LargeButton>
    </UIScene>
));
