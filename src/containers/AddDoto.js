import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addDoto } from '../actions';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';

function mapDispatchToProps(dispatch) {
  const actions = { addDoto };

  return bindActionCreators(actions, dispatch);
}

export class AddDoto extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      alertIsVisible: false
    };
  }

  addDoto() {
    const { value } = this.state;
    if(value != '') {
      this.props.addDoto(value);
      this.setState({
        value: ''
      });
    } else {
      this.setState({
        alertIsVisible: true
      });
    }
  }

  handleChange(evt) {
    this.setState({
      value: evt.target.value
    });
  }

  handleKeyChange(evt) {
    if(evt.key === 'Enter') {
      this.addDoto();
    }
  }

  handleCloseAlert() {
    this.setState({
      alertIsVisible: false
    });
  }

  render() {
    return (
      <div>
        <TextField
          hintText="p. ex., Iniciei o plano de dominação mundial"
          floatingLabelText="O que você fez?"
          fullWidth={ true }
          value={ this.state.value }
          onChange={ this.handleChange.bind(this) }
          onKeyPress={ this.handleKeyChange.bind(this) }
        />
        <Snackbar
          open={ this.state.alertIsVisible }
          message="É necessário adicionar a descrição da Doto."
          autoHideDuration={ 3000 }
          onRequestClose={ this.handleCloseAlert.bind(this) }
        />
      </div>
    );
  }
}

export default connect(undefined, mapDispatchToProps)(AddDoto);
