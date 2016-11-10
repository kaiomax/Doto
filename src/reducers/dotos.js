import { ADD_DOTO } from '../constants/ActionTypes';

const initialState = [];

export default function dotos(state = initialState, action) {
  switch (action.type) {
    case ADD_DOTO:
      return [
        ...state,
        { title: action.payload.title }
      ];
    default:
      return initialState;
  }
}
