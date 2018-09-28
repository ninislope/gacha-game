import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class RarityExt {
}
export class RarityListExt {
}

applyRecordExtension(Models.Rarity, RarityExt);
applyRecordExtension(Models.RarityList, RarityListExt);

declare module "./Models" {
    interface Rarity extends RarityExt { }
    interface RarityList extends RarityListExt { }
}
