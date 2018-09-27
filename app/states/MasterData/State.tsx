import { Rarity } from "./Rarity";
import { EffectiveItemBaseProps } from "./EffectiveItemBase";

export class StateProps extends EffectiveItemBaseProps<StateProps> {
    readonly rarity!: Rarity;
}

export class State extends StateProps {

}
