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
  constructor(props) {
    super();

    this.state = {
      secondsLeft: props.clock.secondsLeft
    }
  }

  componentDidMount() {
    if(this.props.clock.ticking && !this.interval) {
      this.setTickInterval();
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.clock.ticking && !this.props.clock.ticking) {
      clearInterval(this.interval);
    } else if(!prevProps.clock.ticking && this.props.clock.ticking) {
      this.setTickInterval();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setTickInterval() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState((prevState) => ({
      secondsLeft: prevState.secondsLeft - 1
    }));
  }

  render() {
    return (
      <div>
        <Clock time={ this.state.secondsLeft } />
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
