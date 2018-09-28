import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class EffectiveItemBaseExt<IRecord extends Models.IEffectiveItemBase, Record extends IRecord> {
}
export class EffectiveItemBaseListExt<IRecord extends Models.IEffectiveItemBase, Record extends IRecord> {
}

applyRecordExtension(Models.EffectiveItemBase, EffectiveItemBaseExt);
applyRecordExtension(Models.EffectiveItemBaseList, EffectiveItemBaseListExt);

declare module "./Models" {
    interface EffectiveItemBase<IRecord extends IEffectiveItemBase, Record extends IRecord> extends EffectiveItemBaseExt<IRecord, Record> { }
    interface EffectiveItemBaseList<IRecord extends IEffectiveItemBase, Record extends IRecord> extends EffectiveItemBaseListExt<IRecord, Record> { }
}
