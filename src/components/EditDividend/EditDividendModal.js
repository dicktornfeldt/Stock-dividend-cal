import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

import { ModalContainer, Close, H2 } from '../FAQ/ModalStyle';
import {
  closeStockModal,
  editDividend,
  deleteDividend,
  addDividend,
} from '../../actions/stockActions';

const StyledUl = styled.ul`
  margin: 0 0 1rem 0;
  li {
    margin: 0 0 2.5rem 0;
    &:last-child {
      margin: 0;
    }
    @media (min-width: 768px) {
      margin: 0 0 1.5rem 0;
    }
  }
`;

const InputWrap = styled.article`
  margin: 0 0 1rem 0;
  vertical-align: top;
  @media (min-width: 768px) {
    display: inline-block;
    width: 40%;
    margin: 0;
    &:first-child {
      margin-right: 3%;
    }
  }
  label {
    display: block;
    font-weight: bold;
    margin: 0 0 0.5rem 0;
  }
  p {
    margin: 0;
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
  margin: 0.5rem 0 0 0;
  cursor: pointer;
  transition: all 170ms linear;
  @media (min-width: 768px) {
    margin: 2.4rem 0 0 1.5rem;
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
      margin: 1.5rem 0 0.5rem 0;
      @media (min-width: 768px) {
        margin: 0 0 0.7rem 0;
      }
    `};
`;

const AddDividendWrap = styled.span`
  display: block;
  border-top: 1px solid ${props => props.theme.border};
  padding: 2rem 0 0 0;
  margin: 2rem 0 0 0;
  input {
    border: 1px solid ${props => props.theme.border};
    padding: 0.9rem 0.7rem 0.7rem 0.7rem;
    width: 100%;
    display: block;
    @media (min-width: 768px) {
      display: inline-block;
      width: 40%;
      margin-right: 3%;
    }
    &:focus {
      outline: none;
      border: 1px solid #747480;
    }
  }
  small {
    display: block;
    font-style: italic;
  }
`;

class EditDividendModal extends React.PureComponent {
  static propTypes = {
    modalactive: PropTypes.bool,
    modaldata: PropTypes.string,
    closeStockModal: PropTypes.func,
  };

  state = {
    exDate: '2019-01-01',
    stock: null,
  };

  componentDidMount() {
    this.updateState();
  }

  componentDidUpdate() {
    this.updateState();
  }

  updateState = () => {
    const stock = this.props.portfolio.filter(item => this.props.modaldata === item.api_id);
    this.setState({
      stock: stock[0],
    });
  };

  edit = event => {
    const exDate = event.target.name;
    const amountPerShare = event.target.value;
    this.props.editDividend(
      this.props.modaldata,
      exDate,
      Number(amountPerShare),
      this.state.stock.currency_multiply
    );
  };

  addexDate = event => {
    this.setState({
      exDate: event.target.value,
    });
  };

  addDividend = () => {
    this.props.addDividend(this.props.modaldata, this.state.exDate, 1);
  };

  renderDividends = () => {
    if (this.state.stock !== null) {
      return this.state.stock.dividends.map((dividend, i) => {
        const price = (dividend.amountPerShare * this.state.stock.currency_multiply).toFixed(2);
        const price_int = Number(price);
        return (
          <li key={i}>
            <InputWrap>
              <label htmlFor="dividend_exdate"> Handlas utan utdelning </label>{' '}
              <p> {dividend.exDate} </p>{' '}
            </InputWrap>{' '}
            <InputWrap>
              <label htmlFor="dividend"> Utdelning per aktie </label>{' '}
              <input
                onChange={this.edit}
                type="number"
                name={dividend.exDate}
                placeholder={price_int + ' kr'}
              />{' '}
            </InputWrap>{' '}
            <Button
              onClick={() => {
                this.props.deleteDividend(dividend.exDate, this.state.stock.api_id);
              }}
            >
              Ta bort{' '}
            </Button>{' '}
          </li>
        );
      });
    }
  };

  render() {
    return this.state.stock ? (
      <ModalContainer>
        <aside onClick={this.props.closeStockModal} />{' '}
        <div>
          <Close onClick={this.props.closeStockModal}> ✖ </Close>{' '}
          <H2> Redigera utdelningar för {this.state.stock.name} </H2>{' '}
          <StyledUl> {this.renderDividends()} </StyledUl>{' '}
          <AddDividendWrap>
            <input
              type="date"
              min="2019-01-01"
              max="2019-12-31"
              name="add_dividend"
              defaultValue="2019-01-01"
              onChange={this.addexDate}
            />{' '}
            <Button add onClick={this.addDividend}>
              Lägg till utdelning detta datum{' '}
            </Button>{' '}
            <small> Endast 2019 i format yyyy-mm-dd </small>{' '}
          </AddDividendWrap>{' '}
        </div>{' '}
      </ModalContainer>
    ) : null;
  }
}

function mapStateToProps(state) {
  return {
    modaldata: state.appReducer.modaldata,
    portfolio: state.portfolioReducer.portfolio,
  };
}

export default connect(
  mapStateToProps,
  {
    closeStockModal,
    editDividend,
    deleteDividend,
    addDividend,
  }
)(EditDividendModal);
