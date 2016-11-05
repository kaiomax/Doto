import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addDoto } from '../actions';

function mapStateToProps(state) {
  return {
    dotos: state.dotos
  };
}

function mapDispatchToProps(dispatch) {
  const actions = { addDoto };

  return bindActionCreators(actions, dispatch);
}

export class AddDoto extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ''
    };
  }

  handleChange(evt) {
    this.setState({
      input: evt.target.value
    });
  }

  handleAddDoto() {
    const doto = { title: this.state.input }
    this.props.addDoto(doto);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="O que deseja fazer?"
          onChange={ this.handleChange.bind(this) }
        />
        <button onClick={ this.handleAddDoto.bind(this) }>Adicionar</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDoto);
