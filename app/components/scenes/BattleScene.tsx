import * as React from "react";
import { observer } from "mobx-react";
import { center, scene } from "../style";
import { Button, BaseProps } from "../Common";

export const BattleScene = observer(({store}: BaseProps) => (
    <div className={scene}>
        <span className="title" style={center({top: "30%", height: "1.5em"}, {fontSize: "2em"})}>バトル</span>
    </div>
));
