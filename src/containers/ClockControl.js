import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  pauseTimer,
  playTimer,
  resetTimer
} from '../actions';
import Clock from '../components/Clock';
import RaisedButton from 'material-ui/RaisedButton';

function mapStateToProps(state) {
  return {
    clock: state.clock
  };
}

function mapDispatchToProps(dispatch) {
  const actions = { pauseTimer, playTimer, resetTimer };

  return bindActionCreators(actions, dispatch);
}

export class ClockControl extends React.Component {
  constructor(props) {
    super();

    this.state = {
      secondsLeft: props.clock.timers[props.clock.mode]
    }
  }

  componentDidMount() {
    if(this.props.clock.ticking && !this.interval) {
      this.setTickInterval();
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.clock.mode !== nextProps.clock.mode) {
      this.setState({
        secondsLeft: nextProps.clock.timers[nextProps.clock.mode]
      });
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
    this.setState({
      secondsLeft: this.state.secondsLeft - 1
    });

    if(this.state.secondsLeft === 0){
      clearInterval(this.interval);

      if(this.props.onTickerFinished) {
        this.props.onTickerFinished();
      }
    }
  }

  resetTimer() {
    this.setState({
      secondsLeft: this.props.clock.timers[this.props.clock.mode]
    });
    this.props.resetTimer();
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
          onClick={ this.resetTimer.bind(this) }
          label="Resetar"
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClockControl);
