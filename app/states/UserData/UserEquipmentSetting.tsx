import { observable } from "mobx";
import { Savable } from "./Savable";
import { UserEquipment } from "./UserEquipment";

export class UserEquipmentSettingProps extends Savable<UserEquipmentSettingProps> {
    @observable name!: string;
    @observable userEquipments!: UserEquipment[];
}

/** 装備の組設定 */
export class UserEquipmentSetting extends UserEquipmentSettingProps {
}
