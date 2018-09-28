import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class SingleGachaExt {
}
export class SingleGachaListExt {
}

applyRecordExtension(Models.SingleGacha, SingleGachaExt);
applyRecordExtension(Models.SingleGachaList, SingleGachaListExt);

declare module "./Models" {
    interface SingleGacha extends SingleGachaExt { }
    interface SingleGachaList extends SingleGachaListExt { }
}
