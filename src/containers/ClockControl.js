import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  playTimer,
  setTimeLeft,
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
  const actions = { playTimer, setTimeLeft, stopTimer };

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

  componentWillReceiveProps(nextProps) {
    if(this.state.secondsLeft !== !nextProps.clock.secondsLeft) {
      this.setState({
        secondsLeft: nextProps.clock.secondsLeft
      })
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

  render() {
    return (
      <div>
        <Clock time={ this.state.secondsLeft } />
        <RaisedButton
          onClick={ this.props.playTimer.bind(this) }
          label="Iniciar"
        />
        <RaisedButton
          onClick={ this.props.setTimeLeft.bind(this, this.state.secondsLeft) }
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
