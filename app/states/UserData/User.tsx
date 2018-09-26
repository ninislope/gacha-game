import { observable } from "mobx";
import { UserCard } from "./UserCard";
import { UserActor } from "./UserActor";
import { Savable } from "./Savable";

export interface IUser {
    name?: string;
    cards?: UserCard[];
    actors?: UserActor[];
}

export class User extends Savable<IUser> {
    static types = {
        cards: UserCard,
        actors: UserActor,
    };

    @observable name!: string;
    @observable cards!: UserCard[];
    @observable actors!: UserActor[];

    constructor(props: IUser = {}) {
        super(props);
        if (!this.name) this.name = "";
        if (!this.cards) this.cards = [];
        if (!this.actors) this.actors = [];
    }
}
