import React, { useContext, useEffect, useState } from 'react'
import { ImPlus, ImMinus } from 'react-icons/im';
import GlobalContext from '../utils/globalContext';
import { AnyItem, BasketItem } from '../data/AllItems';

function ShopItem({children}:Props) {
    const [warning, setWarning] = useState(false);
    const {basketItems, updateBasketItemsPlus, updateBasketItemsMinus} = useContext(GlobalContext);
    const {title, cost, id, dailyMax} = children;
    const [currentItem, setCurrentItem] = useState<BasketItem | undefined>()
    
    useEffect(() => {
        if (basketItems) {
            setCurrentItem(basketItems.find((item) => item.id === id));
            if (currentItem) {
                if (currentItem.limit) {
                    setWarning(true);
                } else {
                    setWarning(false);
                }
            }
        }
    }, [basketItems])

    return (
        <div className={`shop-item ${warning && 'warning'}`}>
            <div className="item-title">
                <div className="item-morphs">
                    {!warning &&
                        <button className="item-add-container">
                            <ImPlus className='item-add' onClick={() => updateBasketItemsPlus(children)} />
                        </button>
                    }
                    <button className="item-add-container">
                        <ImMinus className='item-add' onClick={() => updateBasketItemsMinus(children)} />
                    </button>
                </div>
                <span>{title}</span>
            </div>
            <div className="item-cost"><span>{cost}p</span></div>
            <div className="item-maximum">{dailyMax === Infinity ? 'N/A' : dailyMax}</div>
            <div className="item-amount"><span>{currentItem?.amount || 0}</span></div>
        </div>
    )
}

export default ShopItem


interface Props {
    children: AnyItem;
}