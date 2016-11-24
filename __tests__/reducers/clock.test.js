import reducer from '../../src/reducers/clock';
import {
  PAUSE_TIMER,
  PLAY_TIMER,
  SET_TIMER_MODE,
  RESET_TIMER
} from '../../src/constants/ActionTypes';
import {
  INITIAL_STATE,
  WORK_TIME
} from '../../src/constants/Clock';

describe('clock reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(INITIAL_STATE);
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

  it('should handle RESET_TIMER', ()=>{
    expect(
      reducer(undefined, {
        type: RESET_TIMER
      })
    ).toEqual({
      ...INITIAL_STATE,
      mode: INITIAL_STATE.mode,
      ticking: INITIAL_STATE.ticking
    });
  });

  it('should handle SET_TIMER_MODE', ()=>{
    expect(
      reducer(INITIAL_STATE, {
        type: SET_TIMER_MODE,
        payload: {
          mode: WORK_TIME
        }
      })
    ).toEqual({
      ...INITIAL_STATE,
      mode: WORK_TIME,
      ticking: true
    });
  });
});
