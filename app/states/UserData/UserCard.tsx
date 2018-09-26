import { Card } from "../MasterData/Card";
import { observable } from "mobx";
import { BasicData } from "../MasterData/BasicData";
import { Savable } from "./Savable";

export interface IUserCard {
    card: Card;
    amount: number;
}

export class UserCard extends BasicData<IUserCard> implements Savable {
    @observable readonly card!: Card;
    @observable amount!: number;

    toJson() {
        return {
            cardId: this.card.id,
            amount: this.amount,
        }
    }
}
