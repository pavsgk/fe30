import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header';
import Modal from './components/Modal';
import Routes from './Routes/Routes';
import { getGoods } from './store/actionCreators';

const shopUrl = 'https://script.google.com/macros/s/AKfycbzEYFV5JBtD5d2D2swAs6i9n0SeqMxAgZRD-tJG6F3ONbSgF38kL4qeuJ-U-FMDebvxew/exec?';
const shopUrlName = '___cakeShop';
// const backgroundColors = Array.from({ length: 100 }, () => randomHexColor(0.1));

function App () {
  const dispatch = useDispatch()

  const goods = useSelector( store => store.goods.items );

  const savedCart = localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart'));

  // const [goods, setGoods] = useState([]);
  const [cart, setCart] = useState(savedCart || []);
  const [modal, setModal] = useState({isActive: false});

  useEffect(() => dispatch(getGoods()),[]);
   
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
    // setGoods(newState);
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

  const removeCart = (id) => {
    if (!cart.length) return;
    const newState = [...cart];
    const inCartIndex = newState.findIndex(({ id: currentId })=> id === currentId);
    if (inCartIndex !== 1) {
      newState.splice(inCartIndex, 1);
      localStorage.setItem('cart', JSON.stringify(newState));
      setCart(newState);
    }
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
    <BrowserRouter>
      <Header/>
      <Routes 
        goods={goods} 
        showModal={showModal} 
        addCart={addCart} 
        removeCart={removeCart} 
        toggleFav={toggleFav}
      />
      {modal.isActive ? <Modal {...modal} /> : null}
    </BrowserRouter>
  );
  
}

export default App;
