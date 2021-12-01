import React from 'react';
import styles from './ShopItem.module.scss';
import { ReactComponent as FavSvgTrue } from './add-fav-true.svg';
import { ReactComponent as FavSvgFalse } from './add-fav-false.svg';
import PropTypes from 'prop-types';


class ShopItem extends React.Component {

  render() {
    const {name, price, image, sku, color, id, isFav, backgroundColor, toggleFav, addCart, showModal} = this.props;
    return (
    <div className={styles.ShopItem} style={{backgroundColor}}>
      <img src={image} alt={name}></img>
      <div onClick={() => {
        toggleFav(id);
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
      <button onClick={() => 
        showModal(() => addCart(id), 'Add to cart?', 'Are you sure want to add this to cart?')
      }>Add to cart</button>
    </div>
    );
  }
}

ShopItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  image: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,

  toggleFav: PropTypes.func.isRequired,
  addCart: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,

  backgroundColor: PropTypes.string,
  isFav: PropTypes.bool,
}

ShopItem.defaultProps = {
  backgroundColor: 'lightgrey',
  isFav: false
}

export default ShopItem;