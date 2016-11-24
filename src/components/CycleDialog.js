import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {
  BREAK_TIME,
  WORK_TIME
} from '../constants/Clock';

const CycleDialog = (props) => {
  const changeMode = (mode) => {
    props.setTimerMode(mode);
    props.onClose();
  }

  let actions = [];
  switch(props.clockMode) {
    case BREAK_TIME:
      actions = (
        <FlatButton
          label="Começar trabalho"
          primary={ true }
          onTouchTap={ changeMode.bind(this, WORK_TIME) }
        />
      );
      break;
    case WORK_TIME:
      actions = (
        [
          <FlatButton
            label="Pular descanso"
            primary={ true }
            onTouchTap={ changeMode.bind(this, WORK_TIME) }
          />,
          <FlatButton
            label="Ir para descanso"
            primary={ true }
            onTouchTap={ changeMode.bind(this, BREAK_TIME) }
          />
        ]
      );
      break;
  }

  const dialogTitle = props.clockMode === WORK_TIME ? 'É hora de descansar!' : 'É hora de trabalhar!';

  return (
    <Dialog
      title={ dialogTitle }
      actions={ actions }
      open={ props.isVisible }
      onRequestClose={ props.onClose.bind(this) }
    >
    </Dialog>
  );
}

CycleDialog.propTypes = {
  clockMode: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  setTimerMode: PropTypes.func.isRequired
}

export default CycleDialog;
