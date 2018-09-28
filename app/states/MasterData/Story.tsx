import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class StoryExt {
}
export class StoryListExt {
}

applyRecordExtension(Models.Story, StoryExt);
applyRecordExtension(Models.StoryList, StoryListExt);

declare module "./Models" {
    interface Story extends StoryExt { }
    interface StoryList extends StoryListExt { }
}
