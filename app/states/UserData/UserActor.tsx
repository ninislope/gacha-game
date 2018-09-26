import { Actor } from "../MasterData/Actor";
import { observable } from "mobx";
import { Savable } from "./Savable";

export class UserActor extends Savable<UserActor> {
    @observable actor!: Actor;
    @observable level!: number;
}
