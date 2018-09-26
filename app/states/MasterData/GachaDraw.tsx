import { GachaContent } from "./GachaContent";
import { GachaContentGroup } from "./GachaContentGroup";

export interface GachaDraw {
    contents: Array<GachaContent | GachaContentGroup>;
}
