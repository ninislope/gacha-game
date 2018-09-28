import * as Models from "../MasterData/index";
import { observable, computed } from "mobx";
import { Savable } from "./Savable";

export class UserActorProps extends Savable<UserActorProps> {
    @observable level!: number;
    @observable actorId!: number;
    @observable equipmentIds!: number[];
}

export class UserActor extends UserActorProps {
    @computed get actor() {
        return Models.$Actor.find(this.actorId);
    }

    @computed get equipments() {
        return Models.$Equipment.findAll(this.equipmentIds);
    }
}
