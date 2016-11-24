import {
  ADD_DOTO,
  ADD_DOTOS,
  PAUSE_TIMER,
  PLAY_TIMER,
  SET_TIMER_MODE,
  RESET_TIMER
} from './constants/ActionTypes';
import {
  createDoto,
  createDotos
} from './utils/doto';

export function addDoto(title) {
  const doto = createDoto(title);
  return {
    type: ADD_DOTO,
    payload: doto
  };
}

export function addDotos(titles) {
  const dotos = createDotos(titles);
  return {
    type: ADD_DOTOS,
    payload: { dotos }
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
