import reducer from '../../src/reducers/clock';
import {
  START_TIMER, STOP_TIMER
} from '../../src/constants/ActionTypes';

describe('clock reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({ timeLeft: '00:25:00', ticking: false });
  });

  it('should handle START_TIMER', ()=>{
    expect(
      reducer(undefined, {
        type: START_TIMER
      })
    ).toEqual({ timeLeft: '00:25:00', ticking: true });
  });

  it('should handle START_TIMER with a time', ()=>{
    expect(
      reducer(undefined, {
        type: START_TIMER,
        payload: { timeLeft: '00:21:00' }
      })
    ).toEqual({ timeLeft: '00:21:00', ticking: true });
  });

  it('should handle STOP_TIMER', ()=>{
    expect(
      reducer(undefined, {
        type: STOP_TIMER,
        payload: { finishedAt: new Date() }
      })
    ).toEqual({ timeLeft: '00:00:00', ticking: false });
  });

});
