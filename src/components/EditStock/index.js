import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { ModalContainer, Close, H2 } from '../FAQ/ModalStyle';
import { closeStockModal } from '../../actions/stockActions';

class EditStock extends React.PureComponent {
  static propTypes = {
    modalactive: PropTypes.bool,
  };

  render() {
    const { modaldata, modalactive } = this.props;
    return modalactive ? (
      <ModalContainer>
        <aside onClick={this.props.closeStockModal} />
        <div>
          <Close onClick={this.props.closeStockModal}>✖</Close>
          <H2>
            Redigera utdelningar för {modaldata.name}
            <span role="img" aria-label="emoji pencil">
              ✏
            </span>
          </H2>
        </div>
      </ModalContainer>
    ) : null;
  }
}

function mapStateToProps(state) {
  return {
    modalactive: state.appReducer.modalactive,
    modaldata: state.appReducer.modaldata,
  };
}

export default connect(
  mapStateToProps,
  { closeStockModal }
)(EditStock);
