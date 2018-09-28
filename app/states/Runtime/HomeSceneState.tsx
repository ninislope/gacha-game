import { observable, action } from "mobx";
import { Store } from "../Store";

export class HomeSceneState {
    store!: Store;

    @observable userActorIndex?: number;
    @action nextUserActor() {
        if (this.userActorIndex == null) this.userActorIndex = 0;
        if (this.userActorIndex + 1 >= this.store.User.userActors.length) {
            this.userActorIndex = 0;
        } else {
            ++this.userActorIndex;
        }
    }
}
