// import from "../actions";

const initialState = {
  cart: []
}

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case INIT_CART:
      return state;

    case ADD_ITEM_CART: 
      const newCart = state.cart;
      newCart.push(payload);
      return {...state, cart: newCart};
      
    default:
      return state;
  }
}

export default cartReducer;