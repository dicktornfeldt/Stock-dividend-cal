import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

import { ModalContainer, Close, H2 } from '../FAQ/ModalStyle';
import { closeStockModal } from '../../actions/stockActions';

const StyledUl = styled.ul`
  margin: 0 0 1rem 0;
  li {
    margin: 0 0 1.5rem 0;
    &:last-child {
      margin: 0;
    }
  }
`;

const InputWrap = styled.article`
  @media (min-width: 768px) {
    display: inline-block;
    width: 40%;

    &:first-child {
      margin-right: 3%;
    }
  }
  label {
    display: block;
    margin: 0 0 0.5rem 0;
  }
  input {
    border: 1px solid ${props => props.theme.border};
    padding: 0.9rem 0.7rem 0.7rem 0.7rem;
    width: 100%;
    &:focus {
      outline: none;
      border: 1px solid #747480;
    }
  }
`;

const Button = styled.button`
  position: relative;
  color: white;
  border: none;
  background-color: #ff5050;
  border-radius: 0.3rem;
  font-size: 1.4rem;
  padding: 0.8rem 1.5rem 0.9rem 1.5rem;
  margin: 1rem 0 0 0;
  cursor: pointer;
  transition: all 170ms linear;
  @media (min-width: 768px) {
    margin: 0 0 0 1.5rem;
  }
  &:hover {
    transform: scale(1.02);
  }
  &:focus {
    outline: none;
  }
  ${props =>
    props.add &&
    css`
      background-color: ${props => props.theme.primary};
      margin: 1.5rem 0 2rem 0;
      @media (min-width: 768px) {
        margin: 1.5rem 0 2.5rem 0;
      }
    `};
`;

class EditStock extends React.PureComponent {
  static propTypes = {
    modalactive: PropTypes.bool,
  };

  renderDividends = () => {
    return this.props.modaldata.dividends.map((dividend, i) => {
      const price = (dividend.amountPerShare * this.props.modaldata.currency_multiply).toFixed(2);
      const price_int = Number(price);
      return (
        <li key={i}>
          <InputWrap>
            <label htmlFor="dividend_exdate">Handlas utan utdelning</label>
            <input
              type="date"
              min="2018-01-01"
              max="2018-12-31"
              name="dividend_exdate"
              value={dividend.exDate}
            />
          </InputWrap>
          <InputWrap>
            <label htmlFor="dividend">Utdelning per aktie</label>
            <input type="number" name="dividend" placeholder={price_int + ' kr'} />
          </InputWrap>
          <Button>Ta bort</Button>
        </li>
      );
    });
  };

  render() {
    const { modaldata, modalactive, closeStockModal } = this.props;

    console.log(modaldata);

    return modalactive ? (
      <ModalContainer>
        <aside onClick={closeStockModal} />
        <div>
          <Close onClick={closeStockModal}>✖</Close>
          <H2>
            Redigera utdelningar för {modaldata.name}
            <span role="img" aria-label="emoji pencil">
              ✏
            </span>
          </H2>
          <StyledUl>{this.renderDividends()}</StyledUl>
          <Button add>Lägg till</Button>
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
