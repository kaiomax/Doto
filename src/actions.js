import {
  ADD_DOTO,
  PAUSE_TIMER,
  PLAY_TIMER,
  SET_TIMER_MODE,
  RESET_TIMER
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

export function resetTimer() {
  return {
    type: RESET_TIMER
  };
}

export function setTimerMode(mode) {
  return {
    type: SET_TIMER_MODE,
    payload: { mode }
  };
}
