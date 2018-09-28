import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class GachaScheduleExt {
}
export class GachaScheduleListExt {
}

applyRecordExtension(Models.GachaSchedule, GachaScheduleExt);
applyRecordExtension(Models.GachaScheduleList, GachaScheduleListExt);

declare module "./Models" {
    interface GachaSchedule extends GachaScheduleExt { }
    interface GachaScheduleList extends GachaScheduleListExt { }
}
