import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalContext from '../context/globalContext';
import Nav from './Nav';
import Shop from './Shop';
import Rewards from './Rewards';
import Balance from './Balance';
import Fines from './Fines';
import Basket from './Basket';
import { AnyItem, BasketItem } from '../data/AllItems';


// try useReducer??

function App() {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

  const updateBasketItemsPlus = (item: AnyItem) => {
    const chosenItem = basketItems.find((chosen) => chosen.id === item.id);
      if (!chosenItem) {
        setBasketItems((basketItems) => [...basketItems, new BasketItem({...item, amount: 1})]);
      } else {
        setBasketItems((basketItems) => basketItems.map((basketItem) => {
          if (basketItem.id === chosenItem.id) {
            basketItem.increaseAmount();
          }
          return basketItem;
        }))
      }
  }
  const updateBasketItemsMinus = (item: AnyItem) => {
    const chosenItem = basketItems.find((chosen) => chosen.id === item.id);
    if (chosenItem) {
      if (chosenItem.amount > 0) {
          setBasketItems((basketItems) => basketItems.map((basketItem) => {
          if (basketItem.id === chosenItem.id) {
            basketItem.decreaseAmount();
          }
          return basketItem;
        }))
      } else {
        setBasketItems((basketItems) => basketItems.filter((basketItem) => (
          basketItem.id !== chosenItem.id
        )))
      }
    }
  }

  useEffect(() => {
    console.log(basketItems)
  }, [basketItems])

  return (
    <div className="skeleton">
      <Router>
        <GlobalContext.Provider value={{basketItems, updateBasketItemsPlus, updateBasketItemsMinus}}>
          <Nav />
          <Switch>
            <Route exact path='/'>
              <Shop />
            </Route>
            <Route exact path='/rewards'>
              <Rewards />
            </Route>
            <Route exact path='/fines'>
              <Fines />
            </Route>
            <Route exact path='/balance'>
              <Balance />
            </Route>
            <Route exact path="/basket">
              <Basket />
            </Route>
          </Switch>
        </GlobalContext.Provider>
      </Router>
    </div>
  )
}

export default App
