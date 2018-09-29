import { SceneManager, SceneId } from "./Runtime/SceneManager";
import { observable, action } from "mobx";
import { User } from "./UserData/User";
import { HomeSceneState } from "./Runtime/HomeSceneState";
import { ActorSceneState } from "./Runtime/ActorSceneState";
import { LoadManager } from "./Runtime/LoadManager";

export class Store {
    @observable LoadManager = new LoadManager();
    @observable SceneManager = new SceneManager();
    @observable User = new User();
    @observable sceneStates = {
        home: new HomeSceneState(),
        actor: new ActorSceneState(),
    };

    constructor() {
        this.LoadManager.store = this;
        this.SceneManager.store = this;
        this.sceneStates.home.store = this;
    }

    @action destroy() {
        localStorage.clear();
    }

    /**
     * シーン遷移する関数を返す
     * @param sceneId 次のシーン
     * @param forward 進む遷移か？
     */
    callGoto(sceneId: SceneId, forward: boolean | null = true) {
        return (() => this.SceneManager.goto(sceneId, forward));
    }
}
