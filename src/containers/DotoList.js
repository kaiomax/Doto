import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DotoList from '../components/DotoList';
import {
  deleteDoto
} from '../actions';

function mapStateToProps(state) {
  return {
    dotos: state.dotos
  };
}

function mapDispatchToProps(dispatch) {
  const actions = { onDelete: deleteDoto };

  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DotoList);
