import * as React from "react";
import { observer } from "mobx-react";
import { BaseProps } from "./Common";
import { LoadingLayer } from "./components/LoadingLayer";

export const App = observer(({store}: BaseProps) => {
    const Scene = store.SceneManager.scene;

    return (
        <div style={{width: "100%", height: "100%"}}>
            <Scene store={store}/>
            <LoadingLayer store={store}/>
        </div>
    );
});
