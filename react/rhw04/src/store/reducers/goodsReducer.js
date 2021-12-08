import { GET_GOODS, TOGGLE_FAVOURITE_GOODS } from "../actions";

const initialState = {
  items: [],
}

const goodsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GOODS:
      return {...state, items: payload };

    case TOGGLE_FAVOURITE_GOODS:
      const newItems = state.items;
      const targetId = newItems.findIndex(({ id }) => id === payload);
      if (targetId > -1) newItems[targetId].isFav = !newItems[targetId].isFav;
      return {...state, items: newItems};

    default:
      return state;
  }
}

export default goodsReducer;