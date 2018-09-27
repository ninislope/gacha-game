import { Rarity } from "./Rarity";
import { Effect } from "./Effect";
import { EquipmentPart } from "./EquipmentPart";
import { EquipmentType } from "./EquipmentType";
import { EffectiveItemBaseProps } from "./EffectiveItemBase";

export class EquipmentProps extends EffectiveItemBaseProps<EquipmentProps> {
    readonly rarity!: Rarity;
    readonly type!: EquipmentType;
    /** 装備部位 複数個所を覆う場合はビット&で指定、付けられる部位を選択できる場合は配列の複数要素に指定 */
    readonly parts!: EquipmentPart[];
}

export class Equipment extends EquipmentProps {

}
