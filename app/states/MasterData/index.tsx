import { DataList } from "./DataList";

import { Actor } from "./Actor";
import { BadState } from "./BadState";
import { Card } from "./Card";
import { Rarity } from "./Rarity";

export {
    Actor,
    BadState,
    Card,
    Rarity,
};

export const MasterData = {
    Actor: new DataList([
        new Actor({id: 1, name: ""}),
    ]),
    Card: new DataList([
        new Card({id: 1, rarity: Rarity.N, name: "", description: "", effects: []})
    ]),
    BadState: new DataList([
        new BadState({id: 1, name: "", description: ""}),
    ]),
};
