import { BasicData } from "./BasicData";
import { Gacha } from "./Gacha";

/** ガチャ */
export class StepUpGachaProps extends BasicData<StepUpGachaProps> {
    readonly name!: string;
    readonly steps!: Gacha[];
}

/** ガチャ */
export class StepUpGacha extends StepUpGachaProps {
}
