import { BasicData } from "./BasicData";

export class SingletonItemProps extends BasicData<SingletonItemProps> {
    readonly id!: number;
    readonly name!: string;
    readonly description!: string;
}

export class SingletonItem extends SingletonItemProps {

}
