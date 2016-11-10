import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addDoto } from '../actions';
import RaisedButton from 'material-ui/RaisedButton';
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

  handleChange(evt) {
    this.setState({
      value: evt.target.value
    });
  }

  handleAddDoto() {
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

  handleCloseAlert() {
    this.setState({
      alertIsVisible: false
    });
  }

  render() {
    return (
      <div>
        <TextField
          hintText="O que deseja fazer?"
          floatingLabelText="Doto"
          fullWidth={ true }
          value={ this.state.value }
          onChange={ this.handleChange.bind(this) }
        />
        <RaisedButton
          onClick={ this.handleAddDoto.bind(this) }
          label="Adicionar"
          style={ { marginTop: 20, marginBottom: 20 } }
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
