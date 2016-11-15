import {
  addDoto,
  startTimer,
  stopTimer
} from '../src/actions';
import {
  ADD_DOTO,
  START_TIMER,
  STOP_TIMER
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

  it('should create an action to start a timer', () => {
    const timeLeft = '00:25:00';
    const expectedAction = {
      type: START_TIMER,
      payload: { timeLeft }
    };

    expect(startTimer(timeLeft)).toEqual(expectedAction);
  });

  it('should create an action to stop the timer', () => {
    const finishedAt = new Date();
    const expectedAction = {
      type: STOP_TIMER,
      payload: { finishedAt }
    };

    expect(stopTimer(finishedAt)).toEqual(expectedAction);
  });
});
