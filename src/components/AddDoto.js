import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';

class AddDoto extends React.Component {
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
      this.props.onAddDoto(value);
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

AddDoto.propTypes = {
  onAddDoto: PropTypes.func.isRequired
}

export default AddDoto;
