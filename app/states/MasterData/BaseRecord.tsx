import { BaseRecordList } from "./BaseRecordList";

export interface IBaseRecord {
    id: number;
}

export class BaseRecord<IRecord extends IBaseRecord, Record extends IRecord> {
    _parentTable!: BaseRecordList<IRecord, Record>;

    readonly id!: number;

    constructor(props: IRecord) {
        for (const key of Object.keys(props) as Array<keyof IRecord>) {
            (this as any)[key] = props[key];
        }
    }
}
