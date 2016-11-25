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
    } else if(nextProps.clock.ticking && this.state.secondsLeft === 0) {
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
      this.props.pauseTimer();

      if(this.props.onTickerFinished) {
        this.props.onTickerFinished();
      }

      const bell = document.getElementById('bell');
      if(bell) { bell.play(); }
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
        <audio
          id="bell"
          src="https://notificationsounds.com/soundfiles/f5f8590cd58a54e94377e6ae2eded4d9/file-sounds-1070-teleporter.mp3"
        />
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
