import { ADD_DOTO } from './constants/ActionTypes';
import { START_TIMER } from './constants/ActionTypes';

export function addDoto(title) {
  return {
    type: ADD_DOTO,
    payload: { title }
  };
}

export function startTimer(minutes) {
  return {
    type: START_TIMER,
    payload: { minutes }
  };
}
