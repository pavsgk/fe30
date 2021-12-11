import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from "../pages/ShopPage";
import CartPage from "../pages/CartPage";
import FavPage from "../pages/FavPage";

function Routes() {
  

  return (
    <Switch>

      <Route exact path="/cart">
        <CartPage />
      </Route>

      <Route exact path="/fav">
        <FavPage />
      </Route>

      <Route exact path="/">
        <ShopPage />
      </Route>

      <Route path="*">
        <Redirect to="/"/>
      </Route>

    </Switch>
  )
}

export default Routes;