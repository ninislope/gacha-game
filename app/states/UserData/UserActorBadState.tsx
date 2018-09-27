import { observable, computed } from "mobx";
import { MasterData } from "../MasterData/index";
import { Savable } from "./Savable";

export class UserActorState extends Savable<UserActorState> {
    @observable stateId!: number;
    @observable temporary!: boolean;

    @computed get badState() {
        return MasterData.State.find(this.stateId);
    }
}
