import {
  START_TIMER,
  STOP_TIMER
} from '../constants/ActionTypes';

const defaultTime = '00:25:00';
const initialState = { timeLeft: defaultTime, ticking: false };

export default function dotos(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      return {
        timeLeft: (action.payload && action.payload.timeLeft) || state.timeLeft,
        ticking: true
      };
    case STOP_TIMER:
      return {
        timeLeft: '00:00:00',
        ticking: false
      }
    default:
      return state;
  }
}
