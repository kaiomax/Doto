import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CycleDialog from '../components/CycleDialog';
import {
  setTimerMode
} from '../actions';

function mapStateToProps(state) {
  return {
    clockMode: state.clock.mode
  };
}

function mapDispatchToProps(dispatch) {
  const actions = { setTimerMode };

  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CycleDialog);
