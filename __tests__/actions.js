import {
  addDoto,
  startTimer
} from '../src/actions';
import {
  ADD_DOTO,
  START_TIMER
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
    const minutes = 25;
    const expectedAction = {
      type: START_TIMER,
      payload: { minutes }
    };

    expect(startTimer(minutes)).toEqual(expectedAction);
  });
});
