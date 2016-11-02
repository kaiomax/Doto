import { combineReducers } from 'redux';
import { SOME_ACTION_TYPE } from './actions';

function someReducer(state = [], action) {
  switch (action.type) {
    case SOME_ACTION_TYPE:
      return [
        ...state
      ];
    default:
      return state;
  }
}

const dotoApp = combineReducers({
  someReducer
});

export default dotoApp;
