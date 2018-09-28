import * as Models from "../MasterData/index";
import { observable, computed } from "mobx";
import { Savable } from "./Savable";
import { UserState } from "./UserState";
import { UserEquipment } from "./UserEquipment";

export class UserActorProps extends Savable<UserActorProps> {
    @observable level!: number;
    @observable actorId!: number;
    /** 装着中の装備 */ // 呪われている相当がありうるのでここにもつ
    @observable userEquipments?: UserEquipment[];
    /** 状態 */ // 治療不可相当がありうるのでここにもつ
    @observable userStates?: UserState[];
}

export class UserActor extends UserActorProps {
    @computed get actor() {
        return Models.$Actor.find(this.actorId);
    }
}
