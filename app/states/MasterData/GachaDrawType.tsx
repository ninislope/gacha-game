import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class GachaDrawTypeExt {
}
export class GachaDrawTypeListExt {
}

applyRecordExtension(Models.GachaDrawType, GachaDrawTypeExt);
applyRecordExtension(Models.GachaDrawTypeList, GachaDrawTypeListExt);

declare module "./Models" {
    interface GachaDrawType extends GachaDrawTypeExt { }
    interface GachaDrawTypeList extends GachaDrawTypeListExt { }
}
