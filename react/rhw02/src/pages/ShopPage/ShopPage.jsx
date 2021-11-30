import React, { useState, useEffect } from 'react'
import styles from "./ShopPage.module.scss";
import ShopItem from '../../components/ShopItem';

function ShopPage ({ goods, toggleFav, addCart, showModal }) {

  return (
    <section className={styles.ShopPage}>
      {goods.length > 0 && goods.map(e => 
        <ShopItem {...e} 
          key={e.id} 
          toggleFav={toggleFav} 
          addCart={addCart}
          showModal={showModal}
        />
      )}
    </section>
  );
}

export default ShopPage;