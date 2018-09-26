export class DataList<T extends { id: number }> {
    readonly items: T[];
    readonly index: {[id: string]: number};

    constructor(items: T[]) {
        this.items = items;
        this.index = {};
        for (let i = 0; i < this.items.length; ++i) {
            const item = this.items[i];
            this.index[item.id] = i;
        }
    }

    findIndex(id: number) {
        return this.index[id];
    }

    find(id: number) {
        return this.items[this.index[id]];
    }
}
