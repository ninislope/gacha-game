import * as React from "react";
import { observer } from "mobx-react";
import { LargeButton, BaseProps } from "../Common";
import { UIScene } from "./UIScene";
import { UserActorView } from "../components/UserActorView";

export const HomeScene = observer(({store}: BaseProps) => (
    <UIScene title="ホーム" store={store} hideHomeButton={true}>
        <UserActorView
            userActor={store.User.userActors[store.sceneStates.home.userActorIndex]}
            withStates={true}
            onClick={() => store.sceneStates.home.nextUserActor()}
            style={{position: "absolute", bottom: "0%", left: "5%", height: "95%"}}
            />
        <LargeButton top={60} right={37} width="6em" bold={true} background="#f90" onClick={store.callGoto("gacha")}>ガチャ</LargeButton>
        <LargeButton top={60} right={15} width="6em" bold={true} background="#66f" onClick={store.callGoto("gacha")}>クエスト</LargeButton>
        <LargeButton top={80} right={37} width="6em" bold={true} background="#3c3" onClick={store.callGoto("gacha")}>治療</LargeButton>
        <LargeButton top={80} right={15} width="6em" bold={true} background="#f66" onClick={store.callGoto("actors")}>ヒロイン</LargeButton>
    </UIScene>
));
