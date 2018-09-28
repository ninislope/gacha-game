import * as React from "react";
import { observer } from "mobx-react";
import { Style } from "../style";
import { UserActor } from "../../states/UserData/UserActor";
import { UserActorStateView } from "./UserActorStateView";

const actor = Style.registerStyle({
    background: "transparent",
    border: "none",
    height: "100%",
});

export const UserActorView = observer(({userActor, withStates, ...attrs}: {userActor: UserActor, withStates?: boolean} & React.HTMLAttributes<HTMLDivElement>) => (
    <div {...attrs} style={{position: "relative", ...(attrs.style || {})}}>
        {withStates ? <UserActorStateView userActor={userActor}/> : ""}
        <img
            className={actor}
            src={`resources/images/Actor/${userActor.actorId}.png`}
            />
    </div>
));
