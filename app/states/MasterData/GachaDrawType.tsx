import { GachaDraw } from "./GachaDraw";
import { GachaDrawTypeName } from "./GachaDrawTypeName";

/** ガチャの引き方 */
export interface GachaDrawType {
    name: GachaDrawTypeName;
    // requireItem: Item;
    requireAmount: number;
    draws: GachaDraw[];
}
