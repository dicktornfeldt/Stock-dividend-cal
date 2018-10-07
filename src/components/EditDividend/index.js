import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EditDividendModal from './EditDividendModal';

class EditDividend extends React.PureComponent {
  static propTypes = {
    modalactive: PropTypes.bool,
  };

  render() {
    return this.props.modalactive ? <EditDividendModal /> : null;
  }
}

function mapStateToProps(state) {
  return {
    modalactive: state.appReducer.modalactive,
  };
}

export default connect(mapStateToProps)(EditDividend);
