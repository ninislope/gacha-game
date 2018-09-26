import { Rarity } from "./Rarity";
import { Effect } from "./Effect";
import { BasicData } from "./BasicData";
import { CanGet } from "./CanGet";

export class CardProps extends BasicData<CardProps> implements CanGet {
    readonly id!: number;
    readonly rarity!: Rarity;
    readonly name!: string;
    readonly description!: string;
    readonly effects!: Effect[];
}

export class Card extends CardProps {

}
