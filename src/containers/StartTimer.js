import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { startTimer } from '../actions';
import RaisedButton from 'material-ui/RaisedButton';

function mapDispatchToProps(dispatch) {
  const actions = { startTimer };

  return bindActionCreators(actions, dispatch);
}

export class StartTimer extends React.Component {
  handleStartTimer() {
    this.props.startTimer(25);
  }

  render() {
    return (
      <div>
        <RaisedButton
          onClick={ this.handleStartTimer.bind(this) }
          label="Iniciar"
          style={ { marginTop: 20, marginBottom: 20 } }
        />
      </div>
    );
  }
}

export default connect(undefined, mapDispatchToProps)(StartTimer);
