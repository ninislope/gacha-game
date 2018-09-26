import { MasterData } from "../MasterData/index";
import { observable, computed } from "mobx";
import { Savable } from "./Savable";

export class UserCard extends Savable<UserCard> {
    @observable readonly cardId!: number;
    @observable amount!: number;

    @computed get card() {
        return MasterData.Card.find(this.cardId);
    }
}
