import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { updatePortfolio } from '../../actions/stockActions';
import Update from '../../images/update.svg';

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

class PortfolioUpdate extends React.PureComponent {
  updateStocks = () => {
    if (Object.keys(this.props.stocks).length !== 0) {
      this.props.updatePortfolio(this.props.stocks);
    }
  };

  render() {
    return Object.keys(this.props.stocks).length !== 0 ? (
      <RefreshWrapper>
        <button onClick={this.updateStocks}>Uppdatera aktiekurser</button>
      </RefreshWrapper>
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
  { updatePortfolio }
)(PortfolioUpdate);
