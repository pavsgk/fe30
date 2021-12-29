import { saveFavouritesToLS } from "../../utils/handleLS";
import { GET_GOODS, TOGGLE_FAVOURITE_GOODS } from "../actions";

const initialState = {
  items: [],
  favRerender: false,
}

const goodsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GOODS:
      return {...state, items: payload };

    case TOGGLE_FAVOURITE_GOODS:
      const newItems = state.items;
      const targetId = newItems.findIndex(({ id }) => id === payload);

      if (targetId > -1) newItems[targetId].isFav = !newItems[targetId].isFav;

      saveFavouritesToLS(newItems);

      return {...state, items: newItems, favRerender: !state.favRerender};

    default:
      return state;
  }
}

export default goodsReducer;