import { Card } from "../MasterData/Card";
import { observable } from "mobx";
import { Savable } from "./Savable";

export class UserCard extends Savable<UserCard> {
    @observable readonly card!: Card;
    @observable amount!: number;
}
