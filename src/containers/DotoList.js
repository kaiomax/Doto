import { connect } from 'react-redux';
import DotoList from '../components/DotoList';

function mapStateToProps(state) {
  return {
    dotos: state.dotos
  };
}

export default connect(mapStateToProps)(DotoList);
