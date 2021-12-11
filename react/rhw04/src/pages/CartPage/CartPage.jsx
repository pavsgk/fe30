import styles from "./CartPage.module.scss";
import ShopItem from "../../components/ShopItem";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function CartPage(props) {

  // const cart = useSelector()
  
  const { goods, toggleFav, removeCart, showModal } = props;
  const inCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  const inCartIds = inCart.map(({id}) => id);

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

CartPage.propTypes = {
  goods: PropTypes.array.isRequired, 
  toggleFav: PropTypes.func.isRequired, 
  removeCart: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
}

export default CartPage;