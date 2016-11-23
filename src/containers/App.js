import React, { Component } from 'react';
import AddDoto from './AddDoto';
import DotoList from './DotoList';
import ClockControl from './ClockControl';
import Paper from 'material-ui/Paper';

const paperStyle = {
  width: 600,
  padding: 20,
  marginTop: 50,
  marginBottom: 50,
  marginLeft: 'auto',
  marginRight: 'auto'
};

export default class App extends Component {
  render() {
    return (
      <Paper style={ paperStyle } zDepth={ 1 }>
        <ClockControl />
        <AddDoto />
        <DotoList />
      </Paper>
    );
  }
}
