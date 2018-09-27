import { Rarity } from "./Rarity";

export interface GachaContent {
    weight: number;
    item: { rarity: Rarity };
}
