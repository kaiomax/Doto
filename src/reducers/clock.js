import {
  PAUSE_TIMER,
  PLAY_TIMER,
  STOP_TIMER
} from '../constants/ActionTypes';
import moment from 'moment';

const defaultTime = moment.duration(25, 'minutes').asSeconds();
const initialState = { secondsLeft: defaultTime, ticking: false };

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
    case STOP_TIMER:
      return {
        secondsLeft: defaultTime,
        ticking: false
      }
    default:
      return state;
  }
}
