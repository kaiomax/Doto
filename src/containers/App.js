import React, { Component } from 'react';
import DotoList from './DotoList';
import ClockControl from './ClockControl';
import CycleDialog from './CycleDialog';
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
  constructor() {
    super();

    this.state = {
      dialogIsVisible: false
    };
  }

  toggleDialog() {
    this.setState({
      dialogIsVisible: !this.state.dialogIsVisible
    });
  }

  render() {
    return (
      <Paper style={ paperStyle } zDepth={ 1 }>
        <ClockControl
          onTickerFinished={ this.toggleDialog.bind(this) }
        />
        <DotoList />
        <CycleDialog
          isVisible={ this.state.dialogIsVisible }
          onClose={ this.toggleDialog.bind(this) }
        />
      </Paper>
    );
  }
}
