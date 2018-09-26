import { GachaContent } from "./GachaContent";

export interface GachaContentGroup {
    name?: string;
    weight: number;
    contents: GachaContent[];
}
