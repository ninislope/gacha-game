import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class StateTypeExt {
}
export class StateTypeListExt {
}

applyRecordExtension(Models.StateType, StateTypeExt);
applyRecordExtension(Models.StateTypeList, StateTypeListExt);

declare module "./Models" {
    interface StateType extends StateTypeExt { }
    interface StateTypeList extends StateTypeListExt { }
}
