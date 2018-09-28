import * as React from "react";
import { observer } from "mobx-react";
import { LargeButton, BaseProps } from "../Common";
import { UIScene } from "./UIScene";
import * as Models from "../../states/MasterData/index";

export const GachaScene = observer(({store}: BaseProps) => (
    <UIScene title="ガチャ" store={store}>
        <div style={{position: "absolute", top: "10%", left: "5%"}}>
            <h2>開催中のガチャ</h2>
            {
                Models.$GachaSchedule.inTime().map(gachaSchedule =>
                    <div>
                        <span>{gachaSchedule.typeGacha().name}</span>
                        <span>
                            {
                                gachaSchedule.typeGacha().gacha.drawTypes.map(drawType =>
                                    <div>
                                        <span>{drawType.gachaDrawTypeName.name} : {drawType.requireItem.name} ✕ {drawType.requireItemAmount}</span>
                                        <LargeButton relative={true} top={0} right={0} onClick={store.callGoto("home")}>ガチャ</LargeButton>
                                    </div>
                                )
                            }
                        </span>
                    </div>
                )
            }
        </div>
    </UIScene>
));
