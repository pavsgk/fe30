import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import goodsReducer from './goodsReducer';
import modalReducer from './modalReducer';


const rootReducer = combineReducers({
  goods: goodsReducer,
  modal: modalReducer,
  cart: cartReducer,
});

export default rootReducer