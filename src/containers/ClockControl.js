import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { playTimer } from '../actions';
import RaisedButton from 'material-ui/RaisedButton';

function mapDispatchToProps(dispatch) {
  const actions = { playTimer };

  return bindActionCreators(actions, dispatch);
}

export class ClockControl extends React.Component {
  render() {
    return (
      <div>
        <RaisedButton
          onClick={ this.props.playTimer.bind(this) }
          label="Iniciar"
          style={ { marginTop: 20, marginBottom: 20 } }
        />
      </div>
    );
  }
}

export default connect(undefined, mapDispatchToProps)(ClockControl);
