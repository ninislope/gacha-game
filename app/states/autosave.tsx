import { autorun, toJS } from "mobx";
import { CanGet } from "./MasterData/CanGet";
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

export function ids(objects: CanGet[]) {
    return objects.map((object) => object.id);
}

export function jsons(objects: Savable[]) {
    return objects.map((object) => toJS(object));
}
