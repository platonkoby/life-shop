import { AnyItem, BasketItem } from "../data/AllItems";

export type AnyItemTs = Omit<AnyItem, AnyItemMethods>
export type BasketItemTs = Omit<BasketItem, BasketItemMethods>

type ShopItemType = 'small' | 'medium' | 'large' | 'unique';
type ShopItemTheft = 'large theft' | 'medium theft' | 'small theft';

type AnyItemMethods = '';
type BasketItemMethods = 'increaseAmount' | 'decreaseAmount';