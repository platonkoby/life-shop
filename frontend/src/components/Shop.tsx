import startingItems from '../data/AllItems';
import Search from './Search';
import ShopItem from './ShopItem';

function Shop() {

    return (
        <div className="shop">
            <div className="shop-search">
                <Search />
            </div>
            <div className="shop-items">
            <div className="items-container">
                    <div className="shop-item">
                        <h3 className="heading-title">title</h3>
                        <h3 className="heading-price">price</h3>
                        <h3 className="heading-maximum">daily maximum</h3>
                        <h3 className="heading-amount">amount in basket</h3>
                    </div>
                    {startingItems.map((item, index) => (
                        <ShopItem key={index}>
                            {item}
                        </ShopItem>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Shop
