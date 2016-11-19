import reducer from '../../src/reducers/clock';
import {
  PAUSE_TIMER,
  PLAY_TIMER,
  SET_TIME_LEFT,
  STOP_TIMER
} from '../../src/constants/ActionTypes';
import moment from 'moment';

const defaultTime = moment.duration(25, 'minutes').asSeconds();
const initialState = { secondsLeft: defaultTime, ticking: false };

describe('clock reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({ secondsLeft: defaultTime, ticking: false });
  });

  it('should handle PLAY_TIMER', ()=>{
    expect(
      reducer(undefined, {
        type: PLAY_TIMER
      }).ticking
    ).toBeTruthy();
  });

  it('should handle PAUSE_TIMER', ()=>{
    expect(
      reducer(undefined, {
        type: PAUSE_TIMER
      }).ticking
    ).toBeFalsy();
  });

  it('should handle STOP_TIMER', ()=>{
    expect(
      reducer(undefined, {
        type: STOP_TIMER
      })
    ).toEqual({ secondsLeft: defaultTime, ticking: false });
  });

  it('should handle SET_TIME_LEFT', ()=>{
    const seconds = 60;
    expect(
      reducer(initialState, {
        type: SET_TIME_LEFT,
        payload: {
          seconds,
          ticking: false
        }
      })
    ).toEqual({ secondsLeft: seconds, ticking: false });
  });

});
