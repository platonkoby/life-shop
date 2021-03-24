import React, { useContext } from 'react'
import { ImPlus, ImMinus } from 'react-icons/im';
import GlobalContext from '../context/globalContext';
import { AnyItem } from '../data/AllItems';

function ShopItem({children}:Props) {
    const {basketItems, updateBasketItemsPlus, updateBasketItemsMinus} = useContext(GlobalContext);
    const {title, cost, id} = children;
    let amount: number | undefined;
    if (basketItems) {
        amount = basketItems.find((item) => item.id === id)?.amount;
    }
    return (
        <div className="shop-item">
            <div className="item-title">
                <ImPlus className='item-add' onClick={() => updateBasketItemsPlus(children)}/>
                <ImMinus className='item-add' onClick={() => updateBasketItemsMinus(children)} />
                <span>{title}</span>
            </div>
            <div className="item-cost"><span>{cost}p</span></div>
            <div className="item-amount"><span>{amount || 0}</span></div>
        </div>
    )
}

export default ShopItem


interface Props {
    children: AnyItem;
}