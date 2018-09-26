import { BasicData } from "./BasicData";

export class ActorProps extends BasicData<ActorProps> {
    readonly id!: number;
    readonly name!: string;
}

export class Actor extends ActorProps {

}
