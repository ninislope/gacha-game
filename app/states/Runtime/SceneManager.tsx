import { observable, computed, action } from "mobx";
import { StartScene } from "../../components/scenes/StartScene";
import { HomeScene } from "../../components/scenes/HomeScene";
import { LoadScene } from "../../components/scenes/LoadScene";
import { SignUpScene } from "../../components/scenes/SignUpScene";
import { GachaScene } from "../../components/scenes/GachaScene";
import { Store } from "../Store";
import { ActorsScene } from "../../components/scenes/ActorsScene";
import { ActorScene } from "../../components/scenes/ActorScene";

const scenes = {
    start: StartScene,
    load: LoadScene,
    signup: SignUpScene,
    home: HomeScene,
    gacha: GachaScene,
    actors: ActorsScene,
    actor: ActorScene,
};

const sceneStart: {[T in SceneId]?: (sceneManager: SceneManager) => any} = {
    load(sceneManager: SceneManager) {
        sceneManager.store.sceneStates.load.refleshTip();
    },
    home(sceneManager: SceneManager) {
        sceneManager.store.sceneStates.home.userActorIndex = sceneManager.store.User.favoriteActorIndex;
    },
}

export type SceneId = keyof typeof scenes;

export class SceneManager {
    store!: Store;

    @action goto(sceneId: SceneId) {
        if (this.sceneId !== sceneId && sceneStart[sceneId]) sceneStart[sceneId]!(this);
        this.sceneId = sceneId;
    }
    @computed get scene() { return scenes[this.sceneId]; }
    @observable private sceneId: SceneId = "start";
}
