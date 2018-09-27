import * as React from "react";
import { observer } from "mobx-react";
import { LargeButton, BaseProps } from "../Common";
import { UIScene } from "./UIScene";

export const HomeScene = observer(({store}: BaseProps) => (
    <UIScene title="ホーム" store={store} hideHomeButton={true}>
        <LargeButton top={60} left={65} onClick={store.callGoto("gacha")}>ガチャ</LargeButton>
        <LargeButton top={80} left={65} onClick={store.callGoto("gacha")}>闘技場</LargeButton>
    </UIScene>
));
