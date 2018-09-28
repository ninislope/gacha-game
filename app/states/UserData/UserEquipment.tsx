import * as Models from "../MasterData";
import { observable, computed } from "mobx";
import { Savable } from "./Savable";
import { UserState } from "./UserState";

export class UserEquipmentProps extends Savable<UserEquipmentProps> {
    @observable level!: number;
    @observable equipmentId!: number;
    /** 呪われている */
    @observable cursed?: boolean;
    @observable userStates?: UserState[];
}

export class UserEquipment extends UserEquipmentProps {
    @computed get equipment() {
        return Models.$Equipment.find(this.equipmentId);
    }
}
