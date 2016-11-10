import reducer from '../../src/reducers/dotos';
import {
  ADD_DOTO
} from '../../src/constants/ActionTypes';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([]);
  });

  it('should handle ADD_DOTO', () => {
    expect(
      reducer([], {
        type: ADD_DOTO,
        payload: { title: 'Some Doto' }
      })
    ).toEqual([
      { title: 'Some Doto' }
    ]);

    expect(
      reducer([
        { title: 'Some Doto 1' }
      ], {
        type: ADD_DOTO,
        payload: { title: 'Some Doto 2' }
      })
    ).toEqual([
      { title: 'Some Doto 1' },
      { title: 'Some Doto 2' }
    ]);
  });
});
