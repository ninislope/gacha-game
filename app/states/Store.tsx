import { SceneManager, SceneId } from "./Runtime/SceneManager";
import { observable, action } from "mobx";
import { User } from "./UserData/User";
import { autosave, load } from "./autosave";
import * as Models from "./MasterData/index";
import { BaseRecordList } from "./MasterData/BaseRecordList";
import { LoadSceneState } from "./Runtime/LoadSceneState";
import { HomeSceneState } from "./Runtime/HomeSceneState";

export class Store {
    @observable SceneManager = new SceneManager();
    @observable User = new User();
    @observable loadState?: "loading" | "loaded";
    @observable sceneStates = {
        load: new LoadSceneState(),
        home: new HomeSceneState(),
    };

    constructor() {
        this.SceneManager.store = this;
        this.sceneStates.home.store = this;
    }

    @action async load() {
        if (!this.loadState) this.loadState = "loading";

        try {
            await this.loadMasterData();
        } catch (e) { console.error(e); }
        await wait();

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
