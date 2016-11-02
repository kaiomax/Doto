/*
 * action types
 */

export const SOME_ACTION_TYPE = 'SOME_ACTION_TYPE';


/*
 * action creators
 */

export function someActionCreator(payload) {
  return { type: SOME_ACTION_TYPE, payload }
}
