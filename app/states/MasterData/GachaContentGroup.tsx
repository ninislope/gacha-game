import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class GachaContentGroupExt {
}
export class GachaContentGroupListExt {
}

applyRecordExtension(Models.GachaContentGroup, GachaContentGroupExt);
applyRecordExtension(Models.GachaContentGroupList, GachaContentGroupListExt);

declare module "./Models" {
    interface GachaContentGroup extends GachaContentGroupExt { }
    interface GachaContentGroupList extends GachaContentGroupListExt { }
}
