import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AddDoto from './AddDoto';
import DotoList from './DotoList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

const paperStyle = {
  width: 600,
  padding: 20,
  marginTop: 50,
  marginBottom: 50,
  marginLeft: 'auto',
  marginRight: 'auto'
};

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <MuiThemeProvider>
        <Provider store={ store }>
          <Paper style={ paperStyle } zDepth={ 1 }>
            <AddDoto />
            <DotoList />
          </Paper>
        </Provider>
      </MuiThemeProvider>
    );
  }
}
