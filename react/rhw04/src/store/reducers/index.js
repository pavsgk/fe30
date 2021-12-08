import { combineReducers } from 'redux';
import goodsReducer from './goodsReducer';



const rootReducer = combineReducers({
  goods: goodsReducer,
});

export default rootReducer