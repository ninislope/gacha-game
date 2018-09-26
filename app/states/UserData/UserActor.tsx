import { MasterData } from "../MasterData";
import { observable, computed } from "mobx";
import { Savable } from "./Savable";

export class UserActor extends Savable<UserActor> {
    @observable actorId!: number;
    @observable level!: number;

    @computed get actor() {
        return MasterData.Actor.find(this.actorId);
    }
}
