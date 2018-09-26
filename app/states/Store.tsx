import { SceneManager } from "./SceneManager";
import { observable, action } from "mobx";
import { User } from "./UserData/User";
import { load } from "./autosave";

export class Store {
    @observable SceneManager = new SceneManager();
    @observable User = new User({});
    @observable loadState?: "loading" | "loaded";

    @action async load() {
        if (!this.loadState) this.loadState = "loading";
        await wait();
        const user = load("user");
        if (user) this.User = User.fromJson(user);
        this.User.startAutoSave();
        this.loadState = "loaded";
    }

    @action destroy() {
        localStorage.clear();
    }
}

const wait = () => new Promise((resolve) => setTimeout(resolve, 100));
