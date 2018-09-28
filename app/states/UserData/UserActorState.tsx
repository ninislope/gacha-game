import { observable, computed } from "mobx";
import * as Models from "../MasterData/index";
import { Savable } from "./Savable";

export class UserActorState extends Savable<UserActorState> {
    @observable stateId!: number;
    @observable temporary!: boolean;

    @computed get state() {
        return Models.$State.find(this.stateId);
    }
}
