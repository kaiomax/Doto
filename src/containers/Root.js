import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <MuiThemeProvider>
        <Provider store={ store }>
          <App />
        </Provider>
      </MuiThemeProvider>
    );
  }
}
