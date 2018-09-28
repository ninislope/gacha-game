import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class GachaDrawExt {
}
export class GachaDrawListExt {
}

applyRecordExtension(Models.GachaDraw, GachaDrawExt);
applyRecordExtension(Models.GachaDrawList, GachaDrawListExt);

declare module "./Models" {
    interface GachaDraw extends GachaDrawExt { }
    interface GachaDrawList extends GachaDrawListExt { }
}
