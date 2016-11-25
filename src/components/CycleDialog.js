import React, { PropTypes } from 'react';
import _ from 'lodash';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import {
  BREAK_TIME,
  WORK_TIME
} from '../constants/Clock';
import AddDoto from '../components/AddDoto';

export class CycleDialog extends React.Component {
  constructor() {
    super();

    this.state = {
      dotos: []
    };
  }

  get onWorkMode() {
    return this.props.clockMode === WORK_TIME;
  }

  get actions() {
    switch(this.props.clockMode) {
      case BREAK_TIME:
        return (
          <FlatButton
            label="Começar trabalho"
            primary={ true }
            onTouchTap={ this.changeMode.bind(this, WORK_TIME) }
          />
        );
      case WORK_TIME:
        return (
          [
            <FlatButton
              label="Pular descanso"
              primary={ true }
              onTouchTap={ this.changeMode.bind(this, WORK_TIME) }
            />,
            <FlatButton
              label="Ir para descanso"
              primary={ true }
              onTouchTap={ this.changeMode.bind(this, BREAK_TIME) }
            />
          ]
        );
    }
  }

  changeMode(mode) {
    if(this.onWorkMode && !_.isEmpty(this.state.dotos)) {
      this.props.addDotos(this.state.dotos);
      this.setState({ dotos: [] });
    }
    this.props.setTimerMode(mode);
    this.props.onClose();
  }

  handleAddDoto(title) {
    let dotos = _.clone(this.state.dotos);
    dotos.push(title);
    this.setState({ dotos });
  }

  renderDotosStaging() {
    if(!this.onWorkMode) { return null; }
    return (
      <div>
        <AddDoto onAddDoto={ this.handleAddDoto.bind(this) } />
        <List>
          { this.state.dotos.map((title, i) => {
            return (
              <ListItem
                key={ i }
                primaryText={ title }
              />
            );
          }) }
        </List>
      </div>
    );
  }

  render() {
    const dialogTitle = this.onWorkMode ? 'É hora de descansar!' : 'É hora de trabalhar!';
    return (
      <Dialog
        title={ dialogTitle }
        actions={ this.actions }
        autoScrollBodyContent={ this.onWorkMode }
        open={ this.props.isVisible }
        onRequestClose={ this.props.onClose.bind(this) }
      >
        { this.renderDotosStaging() }
      </Dialog>
    );
  }
}

CycleDialog.propTypes = {
  addDotos: PropTypes.func.isRequired,
  clockMode: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  setTimerMode: PropTypes.func.isRequired
}

export default CycleDialog;
