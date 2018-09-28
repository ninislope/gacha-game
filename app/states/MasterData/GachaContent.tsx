import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class GachaContentExt {
}
export class GachaContentListExt {
}

applyRecordExtension(Models.GachaContent, GachaContentExt);
applyRecordExtension(Models.GachaContentList, GachaContentListExt);

declare module "./Models" {
    interface GachaContent extends GachaContentExt { }
    interface GachaContentList extends GachaContentListExt { }
}
