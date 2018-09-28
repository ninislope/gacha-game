import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class GachaDrawTypeNameExt {
}
export class GachaDrawTypeNameListExt {
}

applyRecordExtension(Models.GachaDrawTypeName, GachaDrawTypeNameExt);
applyRecordExtension(Models.GachaDrawTypeNameList, GachaDrawTypeNameListExt);

declare module "./Models" {
    interface GachaDrawTypeName extends GachaDrawTypeNameExt { }
    interface GachaDrawTypeNameList extends GachaDrawTypeNameListExt { }
}
