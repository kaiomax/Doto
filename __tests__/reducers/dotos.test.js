import reducer from '../../src/reducers/dotos';
import {
  ADD_DOTO,
  ADD_DOTOS,
  DELETE_DOTO
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

  it('should handle ADD_DOTOS', () => {
    const dotos = [
      { title: 'Doto X' },
      { title: 'Doto Y' }
    ];

    expect(
      reducer([], {
        type: ADD_DOTOS,
        payload: { dotos }
      })
    ).toEqual(dotos);

    expect(
      reducer([
        { title: 'Some Doto 1' }
      ], {
        type: ADD_DOTOS,
        payload: { dotos }
      })
    ).toEqual([
      { title: 'Some Doto 1' },
      ...dotos
    ]);
  });

  it('should handle DELETE_DOTO', () => {
    const dotos = [
      { id: 1, title: 'Doto X' },
      { id: 2, title: 'Doto Y' }
    ];

    expect(
      reducer(dotos, {
        type: DELETE_DOTO,
        payload: 1
      })
    ).toEqual([ { id: 2, title: 'Doto Y' } ]);
  });
});
