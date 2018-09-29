import { observable, action, computed } from "mobx";
import { autosave, load } from "../autosave";
import * as Models from "../MasterData/index";
import { BaseRecordList } from "../MasterData/BaseRecordList";
import { Store } from "../Store";
import { User } from "../UserData/User";

export interface NeedMasterDataClass {
    types?: {[name: string]: NeedMasterDataClass};
    needMasterData?: BaseRecordList<any, any>[];
}

export class LoadManager {
    store!: Store;
    @observable userLoading?: Promise<void>;
    @observable userLoaded = false;
    @observable loadingCount = 0;
    /** ローディング待機表示を出す判定に使う */
    @computed get loading() { return this.loadingCount > 0; }
    @observable loadedResources = new Set<string>();
    @observable loadedFiles = new Set<string>();

    @observable loadingTip?: Models.Tip;
    @action async refleshTip() {
        await Models.$Tip.load();
        this.loadingTip = Models.$Tip.findRandom();
    }

    @action async load() {
        const nextSceneNeeds = this.store.SceneManager.nextSceneNeeds;
        let loadCount = 0;
        if (nextSceneNeeds.length && !nextSceneNeeds.every(needs => this.loadedResources.has(needs))) {
            this.refleshTip(); // ローディング待機表示の前提であるため先に呼ぶ
            ++loadCount;
            ++this.loadingCount;
            for (const needs of nextSceneNeeds) {
                if (needs === "user") { await this.loadUser(); this.loadedResources.add("user") }
            }
        }
        const nextSceneNeedFiles = this.store.SceneManager.nextSceneNeedFiles;
        if (nextSceneNeedFiles.length && !nextSceneNeedFiles.every(file => this.loadedFiles.has(file))) {
            if (!loadCount) this.refleshTip();
            ++loadCount;
            ++this.loadingCount;
            await this.loadFiles(nextSceneNeedFiles);
        }
        this.loadingCount -= loadCount;
    }

    @action private async loadUser() {
        if (this.userLoaded) return;
        if (this.userLoading) return await this.userLoading;
        this.userLoading = this.loadUserCore();
        await this.userLoading;
    }

    @action private async loadUserCore() {
        try {
            await this.loadMasterData(this.allMasterData());
        } catch (e) {
            console.error(e);
            alert("マスターデータのロードに失敗しました\nリロードします");
            location.reload();
            return;
        }
        await wait();

        const user = load("user");
        if (user) this.store.User = User.fromJson(user) as any;
        autosave("user", this.store.User);
        this.userLoaded = true;
    }

    private loadFiles(uris: string[]) {
        if (!uris.length) return;
        return Promise.all(uris.map(async uri => {
            if (/(?:png|jpe?g|gif|webp)$/.test(uri)) {
                const res = this.loadImage(uri);
                this.loadedFiles.add(uri);
                return res;
            }
            throw new Error("unknown file format");
        }))
    }

    private loadImage(uri: string) {
        return new Promise<void>((resolve, reject) => {
            const image = new Image();
            image.onload = () => resolve();
            image.onerror = reject;
            image.src = uri;
        });
    }

    private loadMasterData(models: BaseRecordList<any, any>[]) {
        Promise.all(models.map(model => model.load()));
    }

    private needMasterDataForUserData(needMasterDataClass: NeedMasterDataClass) {
        const needMasterData = needMasterDataClass.needMasterData || [];
        if (needMasterDataClass.types) {
            for (const typeName of Object.keys(needMasterDataClass.types)) {
                needMasterData.push(...this.needMasterDataForUserData(needMasterDataClass.types[typeName]));
            }
        }
        return needMasterData;
    }

    private allMasterData() {
        return Object.
            keys(Models).
            filter(name => name.startsWith("$")).
            map(name => (Models as any)[name] as BaseRecordList<any, any>);
    }
}

const wait = () => new Promise((resolve) => setTimeout(resolve, 1500));
