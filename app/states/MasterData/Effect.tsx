import { BasicData } from "./BasicData";

export class EffectProps extends BasicData<Effect> {
    readonly name!: string;
    readonly description!: string;
}

export class Effect extends EffectProps {

}
