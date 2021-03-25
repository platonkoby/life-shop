//useReducer

import { AnyItem } from "../data/AllItems";

interface AddItemToBasket {
    type: 'add';
    item: AnyItem;
}

interface IncreaseBasketItemAmount {
    type: 'increase';
    item: AnyItem;
}

interface RemoveBasketItem {
    type: 'remove'; 
    item: AnyItem;
}

interface DecreaseBasketItemAmount {
    type: 'decrease';
    item: AnyIteml;
}

export type ListActions = 
| AddItemToBasket
| IncreaseBasketItemAmount
| RemoveBasketItem
| DecreaseBasketItemAmount;

