import {
  PAUSE_TIMER,
  PLAY_TIMER,
  SET_TIMER_MODE,
  RESET_TIMER
} from '../constants/ActionTypes';
import {
  INITIAL_STATE
} from '../constants/Clock';

export default function clock(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PLAY_TIMER:
      return {
        ...state,
        ticking: true
      };
    case PAUSE_TIMER:
      return {
        ...state,
        ticking: false
      };
    case RESET_TIMER:
      return {
        ...state,
        mode: INITIAL_STATE.mode,
        ticking: INITIAL_STATE.ticking
      }
    case SET_TIMER_MODE:
      return {
        ...state,
        mode: action.payload.mode,
        ticking: true
      }
    default:
      return state;
  }
}
