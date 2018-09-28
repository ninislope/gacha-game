import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class EquipmentPartExt {
}
export class EquipmentPartListExt {
}

applyRecordExtension(Models.EquipmentPart, EquipmentPartExt);
applyRecordExtension(Models.EquipmentPartList, EquipmentPartListExt);

declare module "./Models" {
    interface EquipmentPart extends EquipmentPartExt { }
    interface EquipmentPartList extends EquipmentPartListExt { }
}
