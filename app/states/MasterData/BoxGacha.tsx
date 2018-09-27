import { BasicData } from "./BasicData";
import { Gacha } from "./Gacha";

export class BoxGachaProps extends BasicData<BoxGachaProps> {
    readonly name!: string;
}

export class BoxGacha extends BoxGachaProps {
}
