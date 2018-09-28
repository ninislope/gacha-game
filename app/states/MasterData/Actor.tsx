import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class ActorExt {
}
export class ActorListExt {
}

applyRecordExtension(Models.Actor, ActorExt);
applyRecordExtension(Models.ActorList, ActorListExt);

declare module "./Models" {
    interface Actor extends ActorExt { }
    interface ActorList extends ActorListExt { }
}
