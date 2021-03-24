import { AnyItem, BasketItem } from "../data/AllItems";

export interface GlobalContextType {
    basketItems: BasketItem[] | undefined;
    updateBasketItemsPlus: (item:AnyItem) => void | undefined;
    updateBasketItemsMinus: (item: AnyItem) => void | undefined;
}
