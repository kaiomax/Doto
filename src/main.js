import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducers from './reducers/';
import App from './components/App';

const store = createStore(
  reducers,
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
