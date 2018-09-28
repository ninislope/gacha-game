import { SceneManager, SceneId } from "./SceneManager";
import { observable, action } from "mobx";
import { User } from "./UserData/User";
import { autosave, load } from "./autosave";
import * as Models from "./MasterData/index";
import { BaseRecordList } from "./MasterData/BaseRecordList";

export class Store {
    @observable SceneManager = new SceneManager();
    @observable User = new User();
    @observable loadState?: "loading" | "loaded";

    @action async load() {
        if (!this.loadState) this.loadState = "loading";
        await wait();

        try {
            await this.loadMasterData();
        } catch (e) { console.error(e); }

        const user = load("user");
        if (user) this.User = User.fromJson(user) as any;
        autosave("user", this.User);
        this.loadState = "loaded";
    }

    loadMasterData() {
        return Promise.all(
            Object.
                keys(Models).
                filter(name => name.startsWith("$")).
                map(name => (Models as any)[name] as BaseRecordList<any, any>).
                map((model) => model.load()),
        );
    }

    @action destroy() {
        localStorage.clear();
    }

    callGoto(sceneId: SceneId) {
        return (() => this.SceneManager.goto(sceneId));
    }
}

const wait = () => new Promise((resolve) => setTimeout(resolve, 1500));
