import * as React from "react";
import { observer } from "mobx-react";
import { BaseProps } from "./common";

export const App = observer(({store}: BaseProps) => {
    const Scene = store.SceneManager.scene;

    return <Scene store={store}/>;
});
