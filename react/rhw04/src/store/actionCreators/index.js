import { GET_GOODS, TOGGLE_FAVOURITE_GOODS } from "../actions";
import { baseShopUrl } from "../constants";

export const getGoods = () => async dispatch => {

  const responce = await fetch(baseShopUrl)
    .then(res => res.text())
    .then(text => JSON.parse(text));

  const rawFavorites = localStorage.getItem('favorites');
  const favorites = rawFavorites !== null ? JSON.parse(rawFavorites) : [];

  if (responce.length > 0) {
    responce.forEach(e => {
      if (favorites[e.id] === true) {
        e.isFav = true;
        return;
      }
      e.isFav = false;
    })
  }

  dispatch({type: GET_GOODS, payload: responce});
}

export const toggleFavGoods = id => ({type: TOGGLE_FAVOURITE_GOODS, payload: id});
