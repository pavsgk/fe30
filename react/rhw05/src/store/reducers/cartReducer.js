// import from "../actions";

import { ADD_ITEM_CART, DELETE_ITEM_CART } from "../actions";

const initialState = {
  items: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
}

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case ADD_ITEM_CART: {
      const newItems = [...state.items];
      const { id, count } = payload;
      const inCartIndex = newItems.findIndex(({ id: currentId }) => id === currentId);
      
      if (inCartIndex > -1) {
        newItems[inCartIndex].count += 1 * count;
      } else {
        newItems.push({
          id,
          count: 1 * count,
        });
      }    
      localStorage.setItem('cart', JSON.stringify(newItems));
      return {...state, items: newItems};
    }

    case DELETE_ITEM_CART: {
      const newItems = [...state.items];
      const inCartIndex = newItems.findIndex(({ id }) => payload === id);
      
      if (inCartIndex > -1) newItems.splice(inCartIndex, 1);
      localStorage.setItem('cart', JSON.stringify(newItems));
      
      return {...state, items: newItems};
    }

    default:
      return state;
  }
}

export default cartReducer;