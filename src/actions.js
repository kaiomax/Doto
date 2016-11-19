import {
  ADD_DOTO,
  PAUSE_TIMER,
  PLAY_TIMER,
  SET_TIME_LEFT,
  STOP_TIMER
} from './constants/ActionTypes';

export function addDoto(title) {
  return {
    type: ADD_DOTO,
    payload: { title }
  };
}

export function pauseTimer() {
  return {
    type: PAUSE_TIMER
  };
}

export function playTimer() {
  return {
    type: PLAY_TIMER
  };
}

export function stopTimer() {
  return {
    type: STOP_TIMER
  };
}


export function setTimeLeft(seconds) {
  return {
    type: SET_TIME_LEFT,
    payload: { seconds }
  };
}
