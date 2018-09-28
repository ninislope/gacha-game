import { observable, action } from "mobx";
import { Tip, $Tip } from "../MasterData/index";

export class LoadSceneState {
    @observable loadingTip?: Tip;
    @action async refleshTip() {
        await $Tip.load();
        this.loadingTip = $Tip.findRandom();
    }
}
