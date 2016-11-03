import {
  addDoto
} from '../src/actions';
import {
  ADD_DOTO
} from '../src/constants/ActionTypes';

describe('actions', () => {
  it('should create an action to add a doto', () => {
    const doto = { title: 'Some Doto' };
    const expectedAction = {
      type: ADD_DOTO,
      payload: doto
    };

    expect(addDoto(doto)).toEqual(expectedAction);
  });
});
