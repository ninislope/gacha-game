import { DataList } from "./DataList";

import { Actor } from "./Actor";
import { State } from "./State";
import { Equipment } from "./Equipment";
import { EquipmentType } from "./EquipmentType";
import { Rarity } from "./Rarity";

export {
    Actor,
    State,
    Equipment,
    Rarity,
};

export const MasterData = {
    Actor: new DataList([
        new Actor({id: 1, name: ""}),
    ]),
    Equipment: new DataList([
        new Equipment({id: 1, rarity: Rarity.N, name: "", description: "", effects: [], type: EquipmentType.Weapon, parts: []})
    ]),
    State: new DataList([
        new State({id: 1, name: "", description: "", effects: [], rarity: Rarity.N}),
    ]),
};
