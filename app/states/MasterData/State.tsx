import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class StateExt {
}
export class StateListExt {
}

applyRecordExtension(Models.State, StateExt);
applyRecordExtension(Models.StateList, StateListExt);

declare module "./Models" {
    interface State extends StateExt { }
    interface StateList extends StateListExt { }
}
