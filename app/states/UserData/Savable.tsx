export class Savable<T = any> {
    static fromJson(props: any) {
        const obj = {} as any;
        const types = ((this as any).types || {}) as {[name: string]: any};
        for (const key of Object.keys(props)) {
            const type = types[key as string];
            if (type) {
                if (props[key] instanceof Array) {
                    obj[key] = (props[key] as any).map((item: any) => new type(item));
                } else {
                    obj[key] = new type(props[key]);
                }
            } else {
                obj[key] = props[key];
            }
        }
        return new this(obj);
    }

    constructor(props: T) {
        for (const key of Object.keys(props) as Array<keyof T>) {
            (this as any)[key] = props[key];
        }
    }
}
