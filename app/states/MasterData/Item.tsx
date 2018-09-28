import * as Models from "./Models";
import { applyRecordExtension } from "./applyRecordExtension";

export class ItemExt {
}
export class ItemListExt {
}

applyRecordExtension(Models.Item, ItemExt);
applyRecordExtension(Models.ItemList, ItemListExt);

declare module "./Models" {
    interface Item extends ItemExt { }
    interface ItemList extends ItemListExt { }
}
