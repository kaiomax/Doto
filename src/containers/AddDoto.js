import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addDoto } from '../actions';

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
        <input
          type="text"
          placeholder="O que deseja fazer?"
          value={ this.state.value }
          onChange={ this.handleChange.bind(this) }
        />
        <button onClick={ this.handleAddDoto.bind(this) }>Adicionar</button>
      </div>
    );
  }
}

export default connect(undefined, mapDispatchToProps)(AddDoto);
