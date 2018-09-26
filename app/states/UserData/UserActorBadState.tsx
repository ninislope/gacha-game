import { observable, computed } from "mobx";
import { MasterData } from "../MasterData/index";
import { Savable } from "./Savable";

export class UserActorBadState extends Savable<UserActorBadState> {
    @observable badStateId!: number;
    @observable temporary!: boolean;

    @computed get badState() {
        return MasterData.BadState.find(this.badStateId);
    }
}
