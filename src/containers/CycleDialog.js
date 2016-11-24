import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CycleDialog from '../components/CycleDialog';
import {
  addDotos,
  setTimerMode
} from '../actions';

function mapStateToProps(state) {
  return {
    clockMode: state.clock.mode
  };
}

function mapDispatchToProps(dispatch) {
  const actions = { addDotos, setTimerMode };

  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CycleDialog);
