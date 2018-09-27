import { observable, computed, action } from "mobx";
import { StartScene } from "../components/scenes/StartScene";
import { HomeScene } from "../components/scenes/HomeScene";
import { LoadScene } from "../components/scenes/LoadScene";
import { SignUpScene } from "../components/scenes/SignUpScene";
import { GachaScene } from "../components/scenes/GachaScene";

const scenes = {
    start: StartScene,
    load: LoadScene,
    signup: SignUpScene,
    home: HomeScene,
    gacha: GachaScene,
};

export type SceneId = keyof typeof scenes;

export class SceneManager {
    @action goto(sceneId: SceneId) { this.sceneId = sceneId; }
    @computed get scene() { return scenes[this.sceneId]; }
    @observable private sceneId: SceneId = "start";
}
