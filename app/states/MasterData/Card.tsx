import { Rarity } from "./Rarity";
import { Effect } from "./Effect";
import { BasicData } from "./BasicData";

export class CardProps extends BasicData<CardProps> {
    readonly id!: number;
    readonly rarity!: Rarity;
    readonly name!: string;
    readonly description!: string;
    readonly effects!: Effect[];
}

export class Card extends CardProps {

}
