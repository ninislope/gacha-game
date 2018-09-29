import { observable, computed, action } from "mobx";
import { Store } from "../Store";
import { StartScene } from "../../components/scenes/StartScene";
import { HomeScene } from "../../components/scenes/HomeScene";
import { SignUpScene } from "../../components/scenes/SignUpScene";
import { GachaScene } from "../../components/scenes/GachaScene";
import { ActorsScene } from "../../components/scenes/ActorsScene";
import { ActorScene } from "../../components/scenes/ActorScene";

export const scenes = {
    start: { scene: StartScene, need: [] },
    signup: { scene: SignUpScene, need: ["user"] },
    home: { scene: HomeScene, need: ["user"] },
    gacha: { scene: GachaScene, need: ["user"] },
    actors: { scene: ActorsScene, need: ["user"] },
    actor: { scene: ActorScene, need: ["user"] },
};

const sceneStart: {[T in SceneId]?: (sceneManager: SceneManager) => any} = {
    home(sceneManager) {
        sceneManager.store.sceneStates.home.userActorIndex = sceneManager.store.User.favoriteActorIndex;
    },
}

export const sceneNeedFiles: {[T in SceneId]?: (store: Store) => string[]} = {
    home(store) {
        return store.User.userActors.map(userActor => userActor.actorId).map(id => `resources/images/Actor/${id}.png`);
    },
};

export type SceneId = keyof typeof scenes;

export class SceneManager {
    store!: Store;

    /**
     * シーン遷移する
     * @param sceneId 次のシーン
     * @param forward 進む遷移か？
     */
    @action async goto(sceneId: SceneId, forward = true) {
        if (this.sceneId === sceneId) return;
        this.forward = forward;
        this.nextSceneId = sceneId;
        await waitTransitionAnimation(); // トランジションアニメーションを待つ
        await this.store.LoadManager.load();
        if (sceneStart[sceneId]) sceneStart[sceneId]!(this);
        this.sceneId = sceneId;
    }

    /** 現在のシーン */
    @computed get scene() { return scenes[this.sceneId].scene; }
    /** 現在のシーンID */
    @observable sceneId: SceneId = "start";
    /** 次のシーンID */
    @observable nextSceneId: SceneId = "start";
    /** 進む遷移か？ */
    @observable forward = true;
    /** 次のシーンで必要な基本リソース */
    @computed get nextSceneNeeds() { return scenes[this.nextSceneId].need as string[] }
    /** 次のシーンで必要な追加リソース */
    @computed get nextSceneNeedFiles() { return sceneNeedFiles[this.nextSceneId] ? sceneNeedFiles[this.nextSceneId]!(this.store) : []; }
}

const waitTransitionAnimation = () => new Promise((resolve) => setTimeout(resolve, 150));
