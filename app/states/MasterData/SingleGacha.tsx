import { BasicData } from "./BasicData";
import { Gacha } from "./Gacha";

/** ガチャ */
export class SingleGachaProps extends BasicData<SingleGachaProps> {
    readonly name!: string;
    readonly gacha!: Gacha;
}

export class SingleGacha extends SingleGachaProps {
}
