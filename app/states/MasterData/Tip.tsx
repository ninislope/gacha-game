import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class TipExt {
}
export class TipListExt {
    findRandom(this: Models.TipList) {
        return this.records[Math.floor(this.records.length * Math.random())];
    }
}

applyRecordExtension(Models.Tip, TipExt);
applyRecordExtension(Models.TipList, TipListExt);

declare module "./Models" {
    interface Tip extends TipExt { }
    interface TipList extends TipListExt { }
}
