import { observable } from "mobx";
import { UserActor } from "./UserActor";
import { Savable } from "./Savable";
import { UserEquipment } from "./UserEquipment";
import { UserState } from "./UserState";

export interface IUser {
    name?: string;
    actors?: UserActor[];
}

export class User extends Savable<IUser> {
    static types = {
        userActors: UserActor,
        userEquipments: UserEquipment,
        userStates: UserState,
    };

    @observable name!: string;
    @observable favoriteActorIndex!: number;
    @observable userActors!: UserActor[];
    /** 装備の内どのキャラにも付いていないもの */
    @observable userEquipments!: UserEquipment[];
    /** 状態の内どのキャラにも付いていないもの */
    @observable userStates!: UserState[];

    constructor(props: IUser = {}) {
        super(props);
        if (!this.name) this.name = "";
        if (!this.favoriteActorIndex) this.favoriteActorIndex = 0;
        if (!this.userActors) this.userActors = [];
        if (!this.userEquipments) this.userEquipments = [];
        if (!this.userStates) this.userStates = [];
    }
}
