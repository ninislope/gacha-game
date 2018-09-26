export class BasicData<T> {
    constructor(props: T) {
        for (const key of Object.keys(props) as Array<keyof T>) {
            (this as any)[key] = props[key];
        }
    }
}
