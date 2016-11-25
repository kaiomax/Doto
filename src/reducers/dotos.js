import {
  ADD_DOTO,
  ADD_DOTOS,
  DELETE_DOTO
} from '../constants/ActionTypes';
import _ from 'lodash';

const initialState = [];

export default function dotos(state = initialState, action) {
  let index;

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
    case DELETE_DOTO:
      index = _.findIndex(state, { id: action.payload });
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
}
