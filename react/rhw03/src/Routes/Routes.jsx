import React from "react";
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import ShopPage from "../pages/ShopPage";
import CartPage from "../pages/CartPage";
import FavPage from "../pages/FavPage";

function Routes(props) {
  const { goods, showModal, addCart, toggleFav } = props;

  return (
    <Switch>

      <Route exact path="/cart">
        <CartPage/>
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