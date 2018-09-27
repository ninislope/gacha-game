import { observable } from "mobx";
import { UserActor } from "./UserActor";
import { Savable } from "./Savable";

export interface IUser {
    name?: string;
    actors?: UserActor[];
}

export class User extends Savable<IUser> {
    static types = {
        actors: UserActor,
    };

    @observable name!: string;
    @observable actors!: UserActor[];

    constructor(props: IUser = {}) {
        super(props);
        if (!this.name) this.name = "";
        if (!this.actors) this.actors = [];
    }
}
