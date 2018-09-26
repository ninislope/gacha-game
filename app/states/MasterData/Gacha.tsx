import { BasicData } from "./BasicData";
import { GachaDrawType } from "./GachaDrawType";

/** ガチャ */
export class GachaProps extends BasicData<GachaProps> {
    readonly name!: string;
    readonly drawTypes!: GachaDrawType[];
}

/** ガチャ */
export class Gacha extends GachaProps {
    draw(drawType: GachaDrawType) {

    }
}
