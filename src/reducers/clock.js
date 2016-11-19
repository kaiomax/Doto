import {
  PAUSE_TIMER,
  PLAY_TIMER,
  SET_TIME_LEFT,
  STOP_TIMER
} from '../constants/ActionTypes';
import {
  WORK_TIME
} from '../constants/Clock';

const initialState = { secondsLeft: WORK_TIME, ticking: false };

export default function clock(state = initialState, action) {
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
    case SET_TIME_LEFT:
      return {
        secondsLeft: action.payload.seconds,
        ticking: false
      }
    case STOP_TIMER:
      return {
        secondsLeft: WORK_TIME,
        ticking: false
      }
    default:
      return state;
  }
}
