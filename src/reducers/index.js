import { combineReducers } from 'redux';
import clock from './clock';
import dotos from './dotos';

const dotoApp = combineReducers({
  clock,
  dotos
});

export default dotoApp;
