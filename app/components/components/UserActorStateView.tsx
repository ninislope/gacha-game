import * as React from "react";
import { observer } from "mobx-react";
import { Style } from "../style";
import { UserActor } from "../../states/UserData/UserActor";

const stateList = Style.registerStyle({
    position: "absolute",
    bottom: "0%",
    left: "0%",
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

export const UserActorStateView = observer(({userActor}: {userActor: UserActor}) => (
    <ul className={stateList}>
        {
            userActor.userStates.map((userState) =>
                <li className={stateItem}>{userState.state.name}</li>
            )
        }
    </ul>
));
