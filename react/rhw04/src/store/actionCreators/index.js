import { updateFavouritesFromLS } from "../../utils/handleLS";
import { ADD_ITEM_CART, GET_GOODS, HIDE_MODAL, SHOW_MODAL, TOGGLE_FAVOURITE_GOODS } from "../actions";
import { baseShopUrl } from "../constants";

export const getGoods = () => async dispatch => {

  const responce = await fetch(baseShopUrl)
    .then(res => res.text())
    .then(text => JSON.parse(text));

  const goods = updateFavouritesFromLS(responce);

  dispatch({type: GET_GOODS, payload: goods});
}

export const toggleFavGoods = id => ({type: TOGGLE_FAVOURITE_GOODS, payload: id});

export const addToCart = id => ({type: ADD_ITEM_CART, payload: id});

export const showModal = (body) => ({type: SHOW_MODAL, payload: body});

export const hideModal = () => ({type: HIDE_MODAL});