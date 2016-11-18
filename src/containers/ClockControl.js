import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  pauseTimer,
  playTimer,
  stopTimer
} from '../actions';
import Clock from '../components/Clock';
import RaisedButton from 'material-ui/RaisedButton';

function mapStateToProps(state) {
  return {
    clock: state.clock
  };
}

function mapDispatchToProps(dispatch) {
  const actions = { pauseTimer, playTimer, stopTimer };

  return bindActionCreators(actions, dispatch);
}

export class ClockControl extends React.Component {
  render() {
    return (
      <div>
        <Clock time={ this.props.clock.timeLeft } />
        <RaisedButton
          onClick={ this.props.playTimer.bind(this) }
          label="Iniciar"
        />
        <RaisedButton
          onClick={ this.props.pauseTimer.bind(this) }
          label="Pausar"
        />
        <RaisedButton
          onClick={ this.props.stopTimer.bind(this) }
          label="Parar"
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClockControl);
