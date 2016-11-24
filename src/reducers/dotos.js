import {
  ADD_DOTO,
  ADD_DOTOS
} from '../constants/ActionTypes';

const initialState = [];

export default function dotos(state = initialState, action) {
  switch (action.type) {
    case ADD_DOTO:
      return [
        ...state,
        { title: action.payload.title }
      ];
    case ADD_DOTOS:
      return [
        ...state,
        ...action.payload.dotos
      ];
    default:
      return state;
  }
}
