import { HIDE_MODAL, SHOW_MODAL } from "../actions";

const initialState = {
  isShown: false,
  actionFn: () => {},
  text: '',
  title: '',
}

const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_MODAL: 
      return { ...payload, isShown: true};

    case HIDE_MODAL: 
      return {...state, isShown: false};

    default:
      return state;
  }
}

export default modalReducer;