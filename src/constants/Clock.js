import { minutesToSeconds } from '../../src/utils/clock';

export const WORK_TIME = 'work';
export const BREAK_TIME = 'break';

export const INITIAL_STATE = {
  timers: {
    [BREAK_TIME]: minutesToSeconds(5),
    [WORK_TIME]: minutesToSeconds(25)
  },
  mode: WORK_TIME,
  ticking: false
};
