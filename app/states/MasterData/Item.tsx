import { BasicData } from "./BasicData";

export class ItemProps extends BasicData<ItemProps> {
    readonly id!: number;
    readonly name!: string;
    readonly description!: string;
}

export class Item extends ItemProps {

}
