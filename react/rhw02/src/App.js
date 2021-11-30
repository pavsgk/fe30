import React from 'react';
import './App.scss';
import ShopPage from './pages/ShopPage';
import randomHexColor from './utils/randomHexColor';

const shopUrl = 'https://script.google.com/macros/s/AKfycbzEYFV5JBtD5d2D2swAs6i9n0SeqMxAgZRD-tJG6F3ONbSgF38kL4qeuJ-U-FMDebvxew/exec?';
const shopUrlName = '___cakeShop';
const backgroundColors = Array.from({ length: 100 }, () => randomHexColor(0.2));

class App extends React.Component {

  state = {
    goods: [],
    cart: []
  }

  componentDidMount() {
    (async () => {
    
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
  
      this.setGoods(responce);
    })()
  }
  
  toggleFav(id) {
    const newState = [...this.state.goods];
    const localStorageNewState = {};
    newState.forEach(e => {
      if (e.id === id) {
        e.isFav = !e.isFav;
      }
      localStorageNewState[e.id] = e.isFav;
    });

    localStorage.setItem('favorites', JSON.stringify(localStorageNewState));
    this.setGoods(newState);
  }

  addCart(id, count = 1) {
    const newState = [...this.cart];
    const inCartIndex = this.cart.findIndex(({ id: currentId })=> id === currentId);
    if (inCartIndex > -1) {
      newState[inCartIndex].count += 1 * count;
    } else {
      newState.push({
        id,
        count: 1 * count,
      });
    }
  }



  setGoods(newGoods = []) {
    this.setState({
      goods: newGoods,
    })
  }


  render() {
    const { goods } = this.state;
    return (
      <ShopPage goods={goods} toggleFav={(id) => this.toggleFav(id)} />
    );
  } 
}

export default App;
