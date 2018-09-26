import { BasicData } from "./BasicData";

export class BadStateProps extends BasicData<BadStateProps> {
    readonly id!: number;
    readonly name!: string;
    readonly description!: string;
}

export class BadState extends BadStateProps {

}
