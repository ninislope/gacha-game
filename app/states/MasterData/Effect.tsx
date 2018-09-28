import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class EffectExt {
}
export class EffectListExt {
}

applyRecordExtension(Models.Effect, EffectExt);
applyRecordExtension(Models.EffectList, EffectListExt);

declare module "./Models" {
    interface Effect extends EffectExt { }
    interface EffectList extends EffectListExt { }
}
