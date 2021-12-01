import React, { useState, useEffect } from 'react';
import './App.scss';
import Modal from './components/Modal';
import ShopPage from './pages/ShopPage';
// import randomHexColor from './utils/randomHexColor';

const shopUrl = 'https://script.google.com/macros/s/AKfycbzEYFV5JBtD5d2D2swAs6i9n0SeqMxAgZRD-tJG6F3ONbSgF38kL4qeuJ-U-FMDebvxew/exec?';
const shopUrlName = '___cakeShop';
// const backgroundColors = Array.from({ length: 100 }, () => randomHexColor(0.1));

function App () {
  const savedCart = localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart'));

  const [goods, setGoods] = useState([]);
  const [cart, setCart] = useState(savedCart || []);
  const [modal, setModal] = useState({isActive: false});

  useEffect(() => {
    const prepareGoods = async () => {
      const responce = await fetch(`${shopUrl}${shopUrlName}`)
        .then(res => res.text())
        .then(text => JSON.parse(text));
  
      const rawFavorites = localStorage.getItem('favorites');
      const favorites = rawFavorites !== null ? JSON.parse(rawFavorites) : [];
  
      if (responce.length > 0) {
        responce.forEach(e => {
          // e.backgroundColor = backgroundColors[Number(e.id)];
          if (favorites[e.id] === true) {
            e.isFav = true;
            return;
          }
          e.isFav = false;
        })
      };
      setGoods(responce);
    }
    prepareGoods();
  },[]);
   
  const toggleFav = (id) => {
    const newState = [...goods];
    const localStorageNewState = {};
    newState.forEach(e => {
      if (e.id === id) {
        e.isFav = !e.isFav;
      }
      localStorageNewState[e.id] = e.isFav;
    });

    localStorage.setItem('favorites', JSON.stringify(localStorageNewState));
    setGoods(newState);
  }

  const addCart = (id, count = 1) => {
    const newState = [...cart];
    const inCartIndex = newState.findIndex(({ id: currentId })=> id === currentId);
    if (inCartIndex > -1) {
      newState[inCartIndex].count += 1 * count;
    } else {
      newState.push({
        id,
        count: 1 * count,
      });
    }
    localStorage.setItem('cart', JSON.stringify(newState));
    setCart(newState);
  }

  const hideModal = () => {
    setModal({ isActive: false, })
  }

  const showModal = (actionFn, title, text, hasCloseButton = true) => {
    setModal({
      isActive: true,
      title,
      text,
      hasCloseButton,
      actionFn,
      hideFn: () => hideModal(),
    });
  }

  return (
    <>
      <ShopPage 
        goods={goods} 
        showModal={(actionFn, title, text, hasCloseButton) => 
          showModal(actionFn, title, text, hasCloseButton)
        }
        addCart={(id) => addCart(id)} 
        toggleFav={(id) => toggleFav(id)} 
      />
      {modal.isActive ? <Modal {...modal} /> : null}
    </>
  );
  
}

export default App;
