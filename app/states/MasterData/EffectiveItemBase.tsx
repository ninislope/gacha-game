import { Effect } from "./Effect";
import { BasicData } from "./BasicData";

export class EffectiveItemBaseProps<T> extends BasicData<EffectiveItemBaseProps<T> & T> {
    readonly id!: number;
    readonly name!: string;
    readonly description!: string;
    readonly effects!: Effect[];
}
