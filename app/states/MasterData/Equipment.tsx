import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class EquipmentExt {
}
export class EquipmentListExt {
}

applyRecordExtension(Models.Equipment, EquipmentExt);
applyRecordExtension(Models.EquipmentList, EquipmentListExt);

declare module "./Models" {
    interface Equipment extends EquipmentExt { }
    interface EquipmentList extends EquipmentListExt { }
}
