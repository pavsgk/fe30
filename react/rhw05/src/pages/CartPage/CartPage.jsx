import styles from "./CartPage.module.scss";
import ShopItem from "../../components/ShopItem";
import { useSelector, shallowEqual } from "react-redux";
import CartCalc from "../../components/CartCalc";

function CartPage() {

  const [cart, goods] = useSelector(store => [store.cart.items, store.goods.items], shallowEqual);

  const inCartIds = cart.map(({id}) => id);

  return (
    <div>
        <section className={styles.CartPage}>
        {goods.map((e, index) =>
          inCartIds.includes(e.id) &&
          <ShopItem {...e} 
            key={e.id} 
            index={index}
            cart={true}
            inCartCount={cart.find(item => item.id === e.id).count}
          />
        )}
        {goods.filter(({id}) => inCartIds.includes(id)).length > 0 || <h3>You don't have any items in the cart</h3>}
      </section>
      <CartCalc />
    </div>
  )
}

export default CartPage;