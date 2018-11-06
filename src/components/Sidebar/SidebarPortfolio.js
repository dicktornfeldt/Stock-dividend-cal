import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { editStock, deleteStock, editStockModal } from '../../actions/stockActions';
import PortfolioUpdate from './PortfolioUpdate';
import Trash from '../../images/trash.svg';
import EditIcon from '../../images/edit.svg';

const MyStocks = styled.ul`
  position: relative;
  margin: 0 0 2.5rem 0;
  @media (min-width: 1024px) {
    margin: 0 0 2rem 0;
  }
  li {
    margin-bottom: 1rem;
    white-space: nowrap;
    position: relative;
    @media (min-width: 1024px) {
      margin-bottom: 0.5rem;
    }
  }
  span {
    width: 1.4rem;
    left: -2rem;
    top: 0.5rem;
    position: absolute;
    cursor: pointer;
    @media (min-width: 1024px) {
      width: 1.1rem;
      left: -1.5rem;
      top: 0.3rem;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  input {
    border: 1px solid ${props => props.theme.border};
    font-family: ${props => props.theme.secondaryfont};
    padding: 0.6rem 0.5rem 0.5rem 0.5rem;
    width: 4rem;
    margin-right: 0.6rem;
    @media (min-width: 1024px) {
      padding: 0.4rem 0.3rem 0.3rem 0.3rem;
      width: 3.7rem;
    }
    &:focus {
      outline: none;
      border: 1px solid #747480;
    }
  }
  small {
    font-size: inherit;
    position: relative;
    top: -0.1rem;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    &:after {
      width: 1.5rem;
      height: 1.5rem;
      top: 51%;
      transform: translateY(-50%);
      right: -2.2rem;
      position: absolute;
      content: '';
      transition: all 0.15s ease;
      background-image: url(${EditIcon});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 1.5rem auto;
    }
  }
`;

class SidebarPortfolio extends React.PureComponent {
  componentDidMount() {
    this.timeout = 0;
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  editQuantity = event => {
    const api_id = event.target.name;
    const quantity = event.target.value;

    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.editStock(quantity, api_id);
    }, 500);
  };

  renderStock() {
    this.props.stocks.sort((a, b) => a.name.localeCompare(b.name));

    return this.props.stocks.map(item => (
      <li key={item.api_id}>
        <span
          onClick={() => {
            this.props.deleteStock(item.api_id);
          }}
        >
          <img src={Trash} alt="trash icon" />
        </span>
        <input
          data-quantity={item.quantity}
          type="text"
          name={item.api_id}
          onChange={this.editQuantity}
          placeholder={item.quantity + 'st'}
        />

        <small
          onClick={() => {
            this.props.editStockModal(item.api_id);
          }}
        >
          {item.name}
        </small>
      </li>
    ));
  }

  render() {
    return Object.keys(this.props.stocks).length !== 0 ? (
      <React.Fragment>
        <MyStocks>{this.renderStock()}</MyStocks>
        <PortfolioUpdate />
      </React.Fragment>
    ) : null;
  }
}

function mapStateToProps(state) {
  return {
    stocks: state.portfolioReducer.portfolio,
  };
}

export default connect(
  mapStateToProps,
  { editStock, deleteStock, editStockModal }
)(SidebarPortfolio);
