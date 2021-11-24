import React, { useState, useEffect } from 'react';
import randomHexColor from '../../utils/randomHexColor.js';
import styles from './ShopItem.module.scss';
import { ReactComponent as FavSvgTrue } from './add-fav-true.svg';
import { ReactComponent as FavSvgFalse } from './add-fav-false.svg';


function ShopItem(props) {
  const backgroundColor = randomHexColor(0.1);
  const {name, price, image, sku, color, id} = props;
  const isFav = localStorage.getItem(`isFav${id}`) === 'true' ? true : false
  const [favoriteStatus, setFavoriteStatus] = useState(isFav);

  return (
    <div className={styles.ShopItem} style={{backgroundColor}}>
      <img src={image}></img>
      <div onClick={() => {
        setFavoriteStatus(!favoriteStatus);
        localStorage.setItem(`isFav${id}`, !favoriteStatus);
      }}>
        {favoriteStatus ? <FavSvgTrue /> : <FavSvgFalse />}
      </div>
      <div>
        <h3>{name}</h3>
        <ul>
          <li>Color: {color}</li>
          <li>SKU: {sku}</li>
        </ul>
        <span>{price} ₴</span>
      </div>
    </div>
  );
}

export default ShopItem;