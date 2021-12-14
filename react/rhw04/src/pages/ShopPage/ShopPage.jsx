import React from 'react';
import styles from "./ShopPage.module.scss";
import ShopItem from '../../components/ShopItem';
import { useSelector } from 'react-redux';

function ShopPage() {
  
  const goods = useSelector(store => store.goods.items);

  return (
      <section className={styles.ShopPage}>
        {goods.length > 0 && goods.map((e, index) => 
          <ShopItem {...e} 
            key={e.id}
            index={index}
            shop={true}
            cart={false}
          />
        )}
        {!goods.length && <img src="./loader.gif" alt="loading store"/>}
      </section>
  );
}

export default ShopPage;