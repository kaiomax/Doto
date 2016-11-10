import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AddDoto from './AddDoto';
import DotoList from './DotoList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <MuiThemeProvider>
        <Provider store={ store }>
          <div>
            <AddDoto />
            <DotoList />
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}
