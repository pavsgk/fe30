import React, { useState, useEffect } from 'react'
import styles from "./ShopPage.module.scss";
import ShopItem from '../../components/ShopItem';

const shopUrl = 'https://script.google.com/macros/s/AKfycbzEYFV5JBtD5d2D2swAs6i9n0SeqMxAgZRD-tJG6F3ONbSgF38kL4qeuJ-U-FMDebvxew/exec?';
const shopUrlName = '___cakeShop';

function ShopPage (props) {

  const [goods, setGoods] = useState([]);

  useEffect(() => (async () => {
    const responce = await fetch(`${shopUrl}${shopUrlName}`)
      .then(res => res.text())
      .then(text => JSON.parse(text));
      
    setGoods(responce);
  })(), []);


  return (
    <section className={styles.ShopPage}>
      {goods.length > 0 && goods.map(e => 
        <ShopItem {...e} key={e.id} />
      )}
    </section>
  );
}

export default ShopPage;