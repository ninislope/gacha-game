import { observable, computed, action } from "mobx";
import { StartScene } from "../components/scenes/StartScene";
import { HomeScene } from "../components/scenes/HomeScene";
import { LoadScene } from "../components/scenes/LoadScene";
import { SignUpScene } from "../components/scenes/SignUpScene";
import { GachaScene } from "../components/scenes/GachaScene";
import { Tip, $Tip } from "./MasterData/index";

const scenes = {
    start: StartScene,
    load: LoadScene,
    signup: SignUpScene,
    home: HomeScene,
    gacha: GachaScene,
};

export type SceneId = keyof typeof scenes;

export class SceneManager {
    @action goto(sceneId: SceneId) {
        if (this.sceneId !== "load" && sceneId === "load") this.refleshTip();
        this.sceneId = sceneId;
    }
    @computed get scene() { return scenes[this.sceneId]; }
    @observable private sceneId: SceneId = "start";

    @observable loadingTip?: Tip;
    @action async refleshTip() {
        await $Tip.load();
        this.loadingTip = $Tip.findRandom();
    }
}
