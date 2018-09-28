import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class StepUpGachaExt {
}
export class StepUpGachaListExt {
}

applyRecordExtension(Models.StepUpGacha, StepUpGachaExt);
applyRecordExtension(Models.StepUpGachaList, StepUpGachaListExt);

declare module "./Models" {
    interface StepUpGacha extends StepUpGachaExt { }
    interface StepUpGachaList extends StepUpGachaListExt { }
}
