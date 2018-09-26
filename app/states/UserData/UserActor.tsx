import { Actor } from "../MasterData/Actor";
import { observable } from "mobx";
import { BasicData } from "../MasterData/BasicData";

export interface IUserActor {
    actor: Actor;
    level: number;
}

export class UserActor extends BasicData<IUserActor> {
    @observable actor!: Actor;
    @observable level!: number;
}
