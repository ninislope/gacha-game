import { observable } from "mobx";
import { UserCard } from "./UserCard";
import { autosave, jsons } from "../autosave";
import { UserActor } from "./UserActor";

export interface IUser {
    name?: string;
    cards?: UserCard[];
}

export class User implements IUser {
    static fromJson(json: any) {
        return new User({
            name: json.name,
            // cards: json.cards.map((card: any) => UserCard.fromJson(card)),
        });
    }

    @observable name: string;
    @observable cards: UserCard[] = [];
    @observable actors: UserActor[] = [];

    constructor(props: IUser) {
        this.name = props.name || "";
    }

    startAutoSave() {
        autosave("user", this);
    }

    toJson() {
        return {
            name: this.name,
            cards: jsons(this.cards),
            actors: jsons(this.actors),
        };
    }
}
