import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class SkillTypeExt {
}
export class SkillTypeListExt {
}

applyRecordExtension(Models.SkillType, SkillTypeExt);
applyRecordExtension(Models.SkillTypeList, SkillTypeListExt);

declare module "./Models" {
    interface SkillType extends SkillTypeExt { }
    interface SkillTypeList extends SkillTypeListExt { }
}
