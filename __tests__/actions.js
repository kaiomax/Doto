import validator from 'validator';
import {
  addDoto,
  addDotos,
  deleteDoto,
  pauseTimer,
  playTimer,
  setTimerMode,
  resetTimer
} from '../src/actions';
import {
  ADD_DOTO,
  ADD_DOTOS,
  DELETE_DOTO,
  PAUSE_TIMER,
  PLAY_TIMER,
  SET_TIMER_MODE,
  RESET_TIMER
} from '../src/constants/ActionTypes';

describe('actions', () => {
  it('should create an action to add a doto', () => {
    const title = 'Some Doto';
    const action = addDoto(title);

    expect(action.type).toEqual(ADD_DOTO);
    expect(action.payload.title).toEqual(title);
    expect(validator.isUUID(action.payload.id)).toBe(true);
    expect(validator.isISO8601(action.payload.finishedAt)).toBe(true);
  });

  it('should create an action to add dotos', () => {
    const dotos = ['Doto 1', 'Doto 2'];
    const action = addDotos(dotos);

    expect(action.type).toEqual(ADD_DOTOS);
    expect(action.payload.dotos.length).toEqual(2);
    expect(action.payload.dotos[0].title).toEqual('Doto 1');
    expect(action.payload.dotos[1].title).toEqual('Doto 2');
    expect(validator.isUUID(action.payload.dotos[0].id)).toBe(true);
    expect(validator.isISO8601(action.payload.dotos[0].finishedAt)).toBe(true);
  });

  it('should create an action to delete a doto', () => {
    const action = deleteDoto(1);

    expect(action.type).toEqual(DELETE_DOTO);
    expect(action.payload).toEqual(1);
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
