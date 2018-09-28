import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class SetObjectExt {
}
export class SetObjectListExt {
}

applyRecordExtension(Models.SetObject, SetObjectExt);
applyRecordExtension(Models.SetObjectList, SetObjectListExt);

declare module "./Models" {
    interface SetObject extends SetObjectExt { }
    interface SetObjectList extends SetObjectListExt { }
}
