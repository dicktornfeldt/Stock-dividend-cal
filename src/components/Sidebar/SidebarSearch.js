import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { addStock } from '../../actions/stockActions';
import stockData from '../../stocklist.json';
import Plus from '../../images/plus.svg';

const Input = styled.input`
  border: 1px solid ${props => props.theme.border};
  padding: 0.9rem 0.7rem 0.7rem 0.7rem;
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid #747480;
  }
`;

const StockList = styled.ul`
  margin: 1rem 0 0 0;
  li {
    padding: 0.4rem;
    border-bottom: 1px solid ${props => props.theme.border};
    position: relative;
    cursor: pointer;
    &:hover {
      background-color: white;
    }
    &:after {
      width: 0.7rem;
      height: 0.7rem;
      top: 49%;
      transform: translateY(-50%);
      right: 0;
      position: absolute;
      content: '';
      transition: all 0.15s ease;
      background-image: url(${Plus});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 0.7rem 0.7rem;
    }
  }
`;

class SidebarSearch extends React.PureComponent {
  state = {
    stocks: stockData,
    result: stockData,
    input: '',
  };

  renderStockList() {
    if (this.state.input.length > 0) {
      return this.state.result.map((item, i) => (
        <li
          onClick={() => {
            this.props.addStock(item.name, item.api_id);
            this.clearInput();
          }}
          key={i}
        >
          {item.name}
        </li>
      ));
    }
  }

  filterStocks = event => {
    this.setState({ input: event.target.value });
    let result = [];
    result = this.state.stocks.filter(stock => {
      return stock.name.toLowerCase().search(event.target.value) !== -1;
    });
    this.setState({ result });
  };

  clearInput = () => {
    this.setState({
      input: '',
    });
  };

  render() {
    return (
      <React.Fragment>
        <Input
          type="text"
          placeholder="Sök aktie"
          onChange={this.filterStocks}
          value={this.state.input}
        />
        <StockList>{this.renderStockList()}</StockList>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { addStock }
)(SidebarSearch);
