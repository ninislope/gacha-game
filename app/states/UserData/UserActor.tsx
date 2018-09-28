import * as Models from "../MasterData/index";
import { observable, computed } from "mobx";
import { Savable } from "./Savable";

export class UserActor extends Savable<UserActor> {
    @observable actorId!: number;
    @observable level!: number;

    @computed get actor() {
        return Models.$Actor.find(this.actorId);
    }
}
