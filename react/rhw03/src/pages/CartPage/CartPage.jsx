import styles from "./CartPage.module.scss";
import ShopItem from "../../components/ShopItem";
import { useState } from "react";

function CartPage(props) {
  const { goods, toggleFav, removeCart, showModal } = props;
  const inCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  const inCartIds = inCart.map(({id}) => id);
  console.log(inCartIds);
  return (
    <div>
        <section className={styles.CartPage}>
        {goods.filter(({id}) => inCartIds.includes(id))
          .map(e => 
          <ShopItem {...e} 
            key={e.id} 
            toggleFav={toggleFav} 
            removeCart={removeCart}
            showModal={showModal}
          />
        )}
        {goods.filter(({id}) => inCartIds.includes(id)).length > 0 || <h3>You don't have any items in the cart</h3>}
      </section>
    </div>
  )
}

export default CartPage;