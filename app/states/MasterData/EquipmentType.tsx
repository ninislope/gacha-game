import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class EquipmentTypeExt {
}
export class EquipmentTypeListExt {
}

applyRecordExtension(Models.EquipmentType, EquipmentTypeExt);
applyRecordExtension(Models.EquipmentTypeList, EquipmentTypeListExt);

declare module "./Models" {
    interface EquipmentType extends EquipmentTypeExt { }
    interface EquipmentTypeList extends EquipmentTypeListExt { }
}
