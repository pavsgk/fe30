import React, { useState, useEffect } from 'react';
import './App.scss';
import ShopPage from './pages/ShopPage';
import randomHexColor from './utils/randomHexColor';

const shopUrl = 'https://script.google.com/macros/s/AKfycbzEYFV5JBtD5d2D2swAs6i9n0SeqMxAgZRD-tJG6F3ONbSgF38kL4qeuJ-U-FMDebvxew/exec?';
const shopUrlName = '___cakeShop';
const backgroundColors = Array.from({ length: 100 }, () => randomHexColor(0.2));

function App() {

  const [goods, setGoods] = useState([]);

  useEffect(() => (async () => {
    
    const responce = await fetch(`${shopUrl}${shopUrlName}`)
      .then(res => res.text())
      .then(text => JSON.parse(text));

    const rawFavorites = localStorage.getItem('favorites');
    const favorites = rawFavorites !== null ? JSON.parse(rawFavorites) : [];

    if (responce.length > 0) {
      responce.forEach(e => {
        e.backgroundColor = backgroundColors[Number(e.id)];
        if (favorites[e.id] === true) {
          e.isFav = true;
          return;
        }
        e.isFav = false;
      })
    };

    setGoods(responce);
  })(), []);
  
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


  return (
    <>
      <ShopPage goods={goods} toggleFav={toggleFav} />
    </>
  );
}

export default App;
