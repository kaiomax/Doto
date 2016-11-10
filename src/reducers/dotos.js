import { ADD_DOTO } from '../constants/ActionTypes';

export default function dotos(state = [], action) {
  switch (action.type) {
    case ADD_DOTO:
      return [
        ...state,
        { title: action.payload.title }
      ];
    default:
      return state;
  }
}
