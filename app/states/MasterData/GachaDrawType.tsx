import { GachaDraw } from "./GachaDraw";
import { GachaDrawTypeName } from "./GachaDrawTypeName";

/** ガチャの引き方 */
export interface GachaDrawType {
    name: GachaDrawTypeName;
    // requireItem: Item;
    /** 引く時の消費コスト */
    requireAmount: number;
    /** 一回のボタン操作での許容リピート数(1連ガチャを10回引く的な) */
    allowRepeatCount?: number;
    /** 各引きの中身 */
    draws: GachaDraw[];
}
