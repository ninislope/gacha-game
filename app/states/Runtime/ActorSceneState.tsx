import { observable } from "mobx";
import { UserActor } from "../UserData/UserActor";

export class ActorSceneState {
    @observable userActor!: UserActor;
}
