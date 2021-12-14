import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { useDispatch } from 'react-redux';

import Header from './components/Header';
import Modal from './components/Modal';
import Routes from './Routes/Routes';
import { getGoods } from './store/actionCreators';

function App () {
  const dispatch = useDispatch()

  useEffect(() => dispatch(getGoods()),[]);

  return (
    <BrowserRouter>
      <Header/>
      <Routes />
      <Modal />
    </BrowserRouter>
  );
  
}

export default App;
