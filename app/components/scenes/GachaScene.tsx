import * as React from "react";
import { observer } from "mobx-react";
import { LargeButton, BaseProps } from "../Common";
import { UIScene } from "./UIScene";

export const GachaScene = observer(({store}: BaseProps) => (
    <UIScene title="ガチャ" store={store}>
        <LargeButton top={70} right={30}
            onClick={store.callGoto("home")}>ガチャ</LargeButton>
    </UIScene>
));
