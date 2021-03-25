import { ShopItemType, ShopItemTheft } from "../types/items";
import {nanoid} from 'nanoid';
import { AnyItemTs, BasketItemTs } from '../types/items';

export class AnyItem {
    title: string;
    cost: number;
    type: ShopItemType;
    fine: ShopItemTheft;
    id: string;
    dailyMax: number;
    description: string;
    
    constructor (props: AnyItemTs) {
        const {title, cost, type, fine, id = nanoid(), dailyMax, description} = props;
        this.title = title;
        this.cost = cost;
        this.type = type;
        this.fine = fine;
        this.id = id;
        this.dailyMax = dailyMax; 
        this.description = description;
    }
}

export class BasketItem extends AnyItem {
    amount: number;
    limit: boolean;
    constructor(props: BasketItemTs) {
        super(props)
        this.amount = props.amount;
        this.limit = false;
    }

    checkLimit() {
        if (this.amount === this.dailyMax) {
            this.limit = true;
        } 
    }

    increaseAmount() {
        this.amount++;
        this.checkLimit();
    }
    decreaseAmount() {
        this.amount--;
        this.limit = false;
    }
}

const startingItems: AnyItem[] = [
    new AnyItem({
        title: 'Hot Shower',
        cost: 1000,
        type: 'large',
        fine: 'large theft',
        id: nanoid(),
        dailyMax: Infinity,
        description: 'Take a hot shower'
    }),
    new AnyItem({
        title: 'Entertainment 1 hour',
        cost: 300,
        type: 'small',
        fine: 'small theft',
        id: nanoid(),
        dailyMax: Infinity,
        description: '1 hour of any type of entertainment, eg. YouTube, manga'
    }),
    new AnyItem({
        title: 'Cut 1 hour of work',
        cost: 600,
        type: 'medium',
        fine: 'medium theft',
        id: nanoid(),
        dailyMax: Infinity,
        description: 'cut 1 working hout of the day and get points for it'
    })
];

export default startingItems;