import React from 'react';
import './App.scss';
import Modal from './components/Modal';
import ShopPage from './pages/ShopPage';
import randomHexColor from './utils/randomHexColor';

const shopUrl = 'https://script.google.com/macros/s/AKfycbzEYFV5JBtD5d2D2swAs6i9n0SeqMxAgZRD-tJG6F3ONbSgF38kL4qeuJ-U-FMDebvxew/exec?';
const shopUrlName = '___cakeShop';
const backgroundColors = Array.from({ length: 100 }, () => randomHexColor(0.1));

class App extends React.Component {

  state = {
    goods: [],
    cart: [],
    modal: {
      isActive: false,
    }
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
    const newState = [...this.state.cart];
    const inCartIndex = newState.findIndex(({ id: currentId })=> id === currentId);
    if (inCartIndex > -1) {
      newState[inCartIndex].count += 1 * count;
    } else {
      newState.push({
        id,
        count: 1 * count,
      });
    }
    this.setCart(newState);
  }

  setCart(newCart = []) {
    this.setState({
      cart: newCart,
    });
  }

  setGoods(newGoods = []) {
    this.setState({
      goods: newGoods,
    });
  }

  showModal(actionFn, title, text, hasCloseButton = true) {
    this.setState({
      modal: {
        isActive: true,
        title,
        text,
        hasCloseButton,
        actionFn,
        hideFn: () => this.hideModal(),
      }
    })
  }

  hideModal() {
    this.setState({
      modal: {
        isActive: false,
      }
    })
  }

  render() {
    const { goods, modal } = this.state;
    console.log(this.state);
    return (
      <>
        <ShopPage 
          goods={goods} 
          showModal={(actionFn, title, text, hasCloseButton) => 
            this.showModal(actionFn, title, text, hasCloseButton)
          }
          addCart={(id) => this.addCart(id)} 
          toggleFav={(id) => this.toggleFav(id)} 
        />
        {modal.isActive ? <Modal {...modal} /> : null}
      </>
    );
  } 
}

export default App;
