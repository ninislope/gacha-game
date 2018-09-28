import { observable, computed } from "mobx";
import * as Models from "../MasterData/index";
import { Savable } from "./Savable";

export class UserItemProps extends Savable<UserItemProps> {
    @observable itemId!: number;
    @observable amount!: number;
}

export class UserItem extends UserItemProps {
    @computed get item() {
        return Models.$Item.find(this.itemId);
    }
}
