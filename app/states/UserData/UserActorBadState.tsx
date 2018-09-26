import { observable } from "mobx";
import { BadState } from "../MasterData/BadState";
import { Savable } from "./Savable";

export class UserActorBadState extends Savable<UserActorBadState> {
    @observable readonly badState!: BadState;
    @observable temporary!: boolean;
}
