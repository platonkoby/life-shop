import { useEffect, useReducer, useState } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalContext from '../utils/globalContext';
import Nav from './Nav';
import Shop from './Shop';
import Rewards from './Rewards';
import Balance from './Balance';
import Fines from './Fines';
import Basket from './Basket';
import { AnyItem } from '../data/AllItems';
import basketReducer from '../utils/basketReducer';


function App() {
  const [basketItems, dispatch] = useReducer(basketReducer, [])
  const [currentItem, setCurrentItem] = useState<AnyItem | null>(null)

  const updateBasketItemsPlus = (item: AnyItem) => {
    const chosenItem = basketItems.find((chosen) => chosen.id === item.id);
      if (!chosenItem) {
        dispatch({type: 'add', item})
      } else {
        setCurrentItem(item);
        dispatch({type: 'increase', item})
      }
  }
  const updateBasketItemsMinus = (item: AnyItem) => {
    const chosenItem = basketItems.find((chosen) => chosen.id === item.id);
    if (chosenItem) {
      if (chosenItem.amount > 0) {
          dispatch({type: 'decrease', item});
      } else {
        dispatch({type: 'remove', item});
      }
    }
  }


  useEffect(() => {
    if (currentItem) {
      
    }
  }, [currentItem])

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

export default App;
