import React, { useState, useEffect } from 'react';
import randomHexColor from '../../utils/randomHexColor.js';
import styles from './ShopItem.module.scss';
import { ReactComponent as FavSvgTrue } from './add-fav-true.svg';
import { ReactComponent as FavSvgFalse } from './add-fav-false.svg';


function ShopItem(props) {
  const {name, price, image, sku, color, id, isFav, backgroundColor, toggleFav, addCart} = props;

  return (
    <div className={styles.ShopItem} style={{backgroundColor}}>
      <img src={image}></img>
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
      <button onClick={() => addCart(id)}>Add to cart</button>
    </div>
  );
}

export default ShopItem;