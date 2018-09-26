import { autorun, toJS } from "mobx";
import { Savable } from "./UserData/Savable";

export function autosave(name: string, object: Savable) {
    autorun(() => {
        localStorage.setItem(name, JSON.stringify(toJS(object)));
    });
}

export function load(name: string) {
    const obj = localStorage.getItem(name);
    if (obj != null) return JSON.parse(obj);
}
