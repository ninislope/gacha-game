import { observable, computed } from "mobx";
import * as Models from "../MasterData/index";
import { Savable } from "./Savable";

export class UserStateProps extends Savable<UserStateProps> {
    @observable stateId!: number;
    /** 治療可能? */
    @observable curable?: boolean;
}

export class UserState extends UserStateProps {
    @computed get state() {
        return Models.$State.find(this.stateId);
    }
}
