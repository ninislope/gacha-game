import { observable } from "mobx";
import { BadState } from "../MasterData/BadState";

export class UserActorBadState {
    @observable readonly badState!: BadState;
    @observable temporary = true;
}