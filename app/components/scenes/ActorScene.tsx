import * as React from "react";
import { observer } from "mobx-react";
import { BaseProps, SmallButton } from "../Common";
import { UIScene } from "./UIScene";
import { UserActorView } from "../components/UserActorView";

export const ActorScene = observer(({store}: BaseProps) => {
    const userActor = store.sceneStates.actor.userActor;
    const actor = userActor.actor;
    return <UIScene title="ヒロイン" store={store} backTo="actors" backEffect={false}>
        <div style={{display: "flex", position: "absolute", bottom: "0%", height: "90%"}}>
            <UserActorView
                userActor={userActor}
                withStates={true}
                style={{height: "100%"}}
                />
            <dl>
                <dt>名前</dt>
                <dd>
                    {actor.name}
                    {
                        store.User.favoriteActorIndex === store.User.userActors.indexOf(userActor) ?
                        "[お気に入り]" :
                        <SmallButton relative={true} background="#f60" onClick={() => store.User.favoriteActorIndex = store.User.userActors.indexOf(userActor)}>→お気に入り</SmallButton>
                    }
                </dd>
                <dt>レベル</dt><dd>{userActor.level}</dd>
                <dt>装備</dt>
                <dd>
                    <ul>
                        {
                            userActor.userEquipments.map(userEquipment => <li>{userEquipment.equipment.name}</li>)
                        }
                    </ul>
                </dd>
                <dt>状態</dt>
                <dd>
                    <ul>
                        {
                            userActor.userStates.map(userState =>
                                <li>({userState.state.type.name}) {userState.state.name}[{userState.curable ? "治療可能" : "治療不可"}]</li>
                            )
                        }
                    </ul>
                </dd>
            </dl>
        </div>
    </UIScene>;
});
