import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { editStock, deleteStock, updatePortfolio } from '../../actions/stockActions';
import Trash from '../../images/trash.svg';
import Update from '../../images/update.svg';

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
`;

const RefreshWrapper = styled.div`
  margin: 0;
  border-bottom: 3px solid ${props => props.theme.border};
  margin: 0 0 2rem 0;
  padding: 0 0 1rem 0;
  text-align: center;
  button {
    position: relative;
    color: white;
    border: none;
    background-color: #9e9e9e;
    border-radius: 0.3rem;
    font-size: 1.4rem;
    padding: 0.5rem 1rem 0.7rem 2.2rem;
    cursor: pointer;
    transition: all 170ms linear;
    @media (min-width: 1024px) {
      font-size: 1.3rem;
    }
    &:hover {
      transform: scale(1.02);
    }
    &:focus {
      outline: none;
    }
    &:before {
      width: 1.5rem;
      height: 1.5rem;
      top: 49%;
      transform: translateY(-50%);
      left: 0.5rem;
      position: absolute;
      content: '';
      transition: all 0.15s ease;
      background-image: url(${Update});
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

  deleteStock = api_id => {
    return this.props.deleteStock(api_id);
  };

  renderStock() {
    return this.props.stocks.map((item, i) => (
      <li key={i}>
        <span
          onClick={() => {
            this.deleteStock(item.api_id);
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
        {item.name}
      </li>
    ));
  }

  updateStocks = () => {
    if (Object.keys(this.props.stocks).length !== 0) {
      this.props.updatePortfolio(this.props.stocks);
    }
  };

  render() {
    return Object.keys(this.props.stocks).length !== 0 ? (
      <React.Fragment>
        <MyStocks>{this.renderStock()}</MyStocks>
        <RefreshWrapper>
          <button onClick={this.updateStocks}>Uppdatera aktiekurser</button>
        </RefreshWrapper>
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
  { editStock, deleteStock, updatePortfolio }
)(SidebarPortfolio);
