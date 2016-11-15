import { ADD_DOTO } from './constants/ActionTypes';
import { START_TIMER } from './constants/ActionTypes';
import { STOP_TIMER } from './constants/ActionTypes';

export function addDoto(title) {
  return {
    type: ADD_DOTO,
    payload: { title }
  };
}

export function startTimer(timeLeft) {
  return {
    type: START_TIMER,
    payload: { timeLeft }
  };
}

export function stopTimer(finishedAt) {
  return {
    type: STOP_TIMER,
    payload: { finishedAt }
  };
}
