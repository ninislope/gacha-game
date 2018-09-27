import * as React from "react";
import { observer } from "mobx-react";
import { center, scene } from "../style";
import { LargeButton, NormalButton, BaseProps } from "../Common";

export const StartScene = observer(({store}: BaseProps) => (
    <div className={scene}>
        <span className="title" style={center({top: "30%", height: "1.5em"}, {position: "absolute", fontSize: "2em"})}>ガチャゲー</span>
        <LargeButton top={60} background="red" onClick={store.callGoto("load")}>スタート</LargeButton>
        <NormalButton top={85} right={12} background="red"
            onClick={() => { if (confirm("本当に消してよいですか？")) {store.destroy(); location.reload()}; }}>データ消去</NormalButton>
    </div>
));
