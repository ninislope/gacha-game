import * as React from "react";
import { observer } from "mobx-react";
import { BaseProps } from "../Common";
import { UIScene } from "./UIScene";
import { UserActorView } from "../components/UserActorView";

export const ActorsScene = observer(({store}: BaseProps) => (
    <UIScene title="ヒロイン" store={store}>
        <div style={{display: "flex", position: "absolute", bottom: "0%", height: "90%"}}>
            {
                store.User.userActors.map(userActor =>
                    <UserActorView
                        userActor={userActor}
                        withStates={true}
                        onClick={() => { store.sceneStates.actor.userActor = userActor; store.SceneManager.goto("actor") }}
                        />
                )
            }
        </div>
    </UIScene>
));
