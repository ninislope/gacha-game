import { BasicData } from "./BasicData";
import { GachaDrawType } from "./GachaDrawType";

export interface IGacha {
    /** ガチャ名 */
    name: string;
    /** ひき方 */
    drawTypes: GachaDrawType[];
}

/** ガチャ */
export class Gacha extends BasicData<IGacha> implements IGacha {
    readonly name!: string;
    readonly drawTypes!: GachaDrawType[];

    draw(drawType: GachaDrawType) {

    }
}
