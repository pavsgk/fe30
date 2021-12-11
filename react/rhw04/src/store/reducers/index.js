import { combineReducers } from 'redux';
import goodsReducer from './goodsReducer';
import modalReducer from './modalReducer';



const rootReducer = combineReducers({
  goods: goodsReducer,
  modal: modalReducer,
});

export default rootReducer