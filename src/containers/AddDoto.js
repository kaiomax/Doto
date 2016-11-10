import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addDoto } from '../actions';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

function mapDispatchToProps(dispatch) {
  const actions = { addDoto };

  return bindActionCreators(actions, dispatch);
}

export class AddDoto extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange(evt) {
    this.setState({
      value: evt.target.value
    });
  }

  handleAddDoto() {
    this.props.addDoto(this.state.value);
    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <div>
        <TextField
          hintText="O que deseja fazer?"
          floatingLabelText="Doto"
          value={ this.state.value }
          onChange={ this.handleChange.bind(this) }
        />
        <RaisedButton
          onClick={ this.handleAddDoto.bind(this) }
          label="Adicionar"
        />
      </div>
    );
  }
}

export default connect(undefined, mapDispatchToProps)(AddDoto);
