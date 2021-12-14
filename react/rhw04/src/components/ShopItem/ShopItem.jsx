import React from 'react';
import styles from './ShopItem.module.scss';
import { ReactComponent as FavSvgTrue } from './add-fav-true.svg';
import { ReactComponent as FavSvgFalse } from './add-fav-false.svg';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { showModal, toggleFavGoods, addToCart, deleteFromCart } from '../../store/actionCreators';

function ShopItem(props) {
  const dispatch = useDispatch();
  const {shop, cart, name, price, image, sku, color, id, backgroundColor, index} = props;
  const isFav = useSelector(store => store.goods.items[index].isFav);

  return (
    <div className={styles.ShopItem} style={{backgroundColor}}>
      <img src={image} alt={name}></img>
      <div onClick={() => {
        dispatch(toggleFavGoods(id));
      }}>
        {isFav ? <FavSvgTrue /> : <FavSvgFalse />}
      </div>
      <div>
        <h3>{name}</h3>
        <ul>
          <li>Color: {color}</li>
          <li>SKU: {sku}</li>
        </ul>
        <span>{price} ₴</span>
      </div>
      {shop && <button onClick={() => {
        dispatch(showModal({title: 'Add to cart?', text: 'Are you sure want to add this to cart?', actionFn: () => {
          dispatch(addToCart(id));
        }}));
      }}>Add to cart</button>}
      {cart && <button onClick={() => {
        dispatch(showModal({title: 'Remove from cart?', text: `Are you sure want to remove this sku (${sku}) from cart?`, actionFn: () => {
          dispatch(deleteFromCart(id));
        }}));
      }}>Remove from cart</button>}
    </div>
  );
}

ShopItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  image: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,

  backgroundColor: PropTypes.string,
  isFav: PropTypes.bool,
}

ShopItem.defaultProps = {
  removeCart: undefined,
  addCart: undefined,
  backgroundColor: 'lightgrey',
  isFav: false
}

export default ShopItem;