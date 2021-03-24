import {Link} from 'react-router-dom';
import {FaShoppingBasket} from 'react-icons/fa'
import { useContext } from 'react';
import GlobalContext from '../context/globalContext';

function BasketNavEl() {
    const {basketItems} = useContext(GlobalContext);
    let amount: number = 0;
    if (basketItems) {
        for (let item of basketItems) {
            amount += item.amount;
        }
    }
    return (
        <div className="nav-basket-el">
                <Link className="basket-link" to="/basket">
                    <div className="basket-link-pocket">
                        <FaShoppingBasket className="nav-basket" size="40"/>
                        <div className={`basket-item-count ${amount < 1 && 'hidden'}`}>{amount}</div>
                    </div>
                </Link>
            </div>
    )
}

export default BasketNavEl
