import {
  addDoto,
  pauseTimer,
  playTimer,
  setTimerMode,
  resetTimer
} from '../src/actions';
import {
  ADD_DOTO,
  PAUSE_TIMER,
  PLAY_TIMER,
  SET_TIMER_MODE,
  RESET_TIMER
} from '../src/constants/ActionTypes';

describe('actions', () => {
  it('should create an action to add a doto', () => {
    const title = 'Some Doto';
    const expectedAction = {
      type: ADD_DOTO,
      payload: { title }
    };

    expect(addDoto(title)).toEqual(expectedAction);
  });

  it('should create an action to pause the timer', () => {
    const expectedAction = {
      type: PAUSE_TIMER
    };

    expect(pauseTimer()).toEqual(expectedAction);
  });

  it('should create an action to play a timer', () => {
    const expectedAction = {
      type: PLAY_TIMER
    };

    expect(playTimer()).toEqual(expectedAction);
  });

  it('should create an action to reset the timer', () => {
    const expectedAction = {
      type: RESET_TIMER
    };

    expect(resetTimer()).toEqual(expectedAction);
  });

  it('should create an action to set the timer mode', () => {
    const expectedAction = {
      type: SET_TIMER_MODE,
      payload: {
        mode: 'X'
      }
    };

    expect(setTimerMode('X')).toEqual(expectedAction);
  });
});
