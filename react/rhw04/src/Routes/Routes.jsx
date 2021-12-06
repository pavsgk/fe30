import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from "../pages/ShopPage";
import CartPage from "../pages/CartPage";
import FavPage from "../pages/FavPage";

function Routes(props) {
  
  const { goods, showModal, addCart, removeCart, toggleFav } = props;

  return (
    <Switch>

      <Route exact path="/cart">
        <CartPage
          goods={goods} 
          showModal={showModal}
          removeCart={removeCart}
          toggleFav={toggleFav} 
        />
      </Route>

      <Route exact path="/fav">
        <FavPage
          goods={goods} 
          showModal={showModal}
          addCart={addCart} 
          toggleFav={toggleFav} 
        />
      </Route>

      <Route exact path="/">
        <ShopPage
          goods={goods} 
          showModal={showModal}
          addCart={addCart} 
          toggleFav={toggleFav}
        />
      </Route>

      <Route path="*">
        <Redirect to="/"/>
      </Route>

    </Switch>
  )
}

export default Routes;