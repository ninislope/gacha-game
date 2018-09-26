import { BasicData } from "./BasicData";

export interface IEffect {
    name: string;
    description: string;
}

export class Effect extends BasicData<IEffect> implements IEffect {
    readonly name!: string;
    readonly description!: string;
}
