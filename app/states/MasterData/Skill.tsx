import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class SkillExt {
}
export class SkillListExt {
}

applyRecordExtension(Models.Skill, SkillExt);
applyRecordExtension(Models.SkillList, SkillListExt);

declare module "./Models" {
    interface Skill extends SkillExt { }
    interface SkillList extends SkillListExt { }
}
