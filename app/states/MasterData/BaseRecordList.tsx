export abstract class BaseRecordList<IRecord extends {id: number}, Record extends IRecord> {
    abstract readonly name: string;

    abstract readonly recordClass: new(source: IRecord) => Record;

    records: Record[] = [];

    index: {[id: string]: number} = {};

    async fetchData() {
        const response = await fetch(`${this.name}.json`);
        if (!response.ok) throw new Error("ERROR: " + response.status);
        this.setData(await response.json());
    }

    setData(records: IRecord[]) {
        this.records = records.map(record => record instanceof this.recordClass ? record : new this.recordClass(record));
        for (const record of this.records) (record as any)._parentTable = this; // 親参照できるように
        this.index = {};
        for (let i = 0; i < records.length; ++i) this.index[records[i].id] = i;
    }

    find(id: number) { return this.records[this.index[id]]; }

    findAll(ids: number[]) { return ids.map(id => this.find(id)); }
}
