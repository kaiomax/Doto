import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from './reducers/';
import Root from './containers/Root';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const store = createStore(
  reducers,
  compose(
    autoRehydrate(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

persistStore(store);

render(
  <AppContainer>
    <Root
      store={ store }
    />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const RootContainer = require('./containers/Root').default;
    render(
      <AppContainer>
        <RootContainer
          store={ store }
        />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
