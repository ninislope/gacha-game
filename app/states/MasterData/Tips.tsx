import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class TipsExt {
}
export class TipsListExt {
}

applyRecordExtension(Models.Tips, TipsExt);
applyRecordExtension(Models.TipsList, TipsListExt);

declare module "./Models" {
    interface Tips extends TipsExt { }
    interface TipsList extends TipsListExt { }
}
