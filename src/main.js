import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import dotos from './reducers/dotos';
import App from './components/App';

let store = createStore(dotos);

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
