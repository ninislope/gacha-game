import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class GachaScheduleExt {
    inTime(this: Models.GachaSchedule, now = new Date()) {
        return (!this.startAt || this.startAt <= now) && (!this.endAt || now < this.endAt);
    }

    typeGacha(this: Models.GachaSchedule) {
        switch(this.gachaType) {
            case "SingleGacha": return Models.$SingleGacha.find(this.gachaId);
            // case "StepUpGacha": return Models.$StepUpGacha.find(this.gachaId);
            default: throw new Error("unknown gacha type!");
        }
    }
}
export class GachaScheduleListExt {
    inTime(this: Models.GachaScheduleList, now = new Date()) {
        return this.records.filter(record => record.inTime(now));
    }
}

applyRecordExtension(Models.GachaSchedule, GachaScheduleExt);
applyRecordExtension(Models.GachaScheduleList, GachaScheduleListExt);

declare module "./Models" {
    interface GachaSchedule extends GachaScheduleExt { }
    interface GachaScheduleList extends GachaScheduleListExt { }
}
