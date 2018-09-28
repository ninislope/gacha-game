import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class GachaExt {
}
export class GachaListExt {
}

applyRecordExtension(Models.Gacha, GachaExt);
applyRecordExtension(Models.GachaList, GachaListExt);

declare module "./Models" {
    interface Gacha extends GachaExt { }
    interface GachaList extends GachaListExt { }
}
