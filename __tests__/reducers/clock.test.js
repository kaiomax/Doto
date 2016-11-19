import reducer from '../../src/reducers/clock';
import {
  PAUSE_TIMER, PLAY_TIMER, STOP_TIMER
} from '../../src/constants/ActionTypes';
import moment from 'moment';

const initalTime = moment.duration(25, 'minutes').asSeconds();

describe('clock reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({ secondsLeft: initalTime, ticking: false });
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
    ).toEqual({ secondsLeft: initalTime, ticking: false });
  });

});
