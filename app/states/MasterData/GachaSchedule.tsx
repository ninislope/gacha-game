import { BasicData } from "./BasicData";
import { Gacha } from "./Gacha";

export class GachaScheduleProps extends BasicData<GachaScheduleProps> {
    readonly gacha!: Gacha;
    readonly startAt!: Date;
    readonly endAt!: Date;
}

export class GachaSchedule extends GachaScheduleProps {
}
