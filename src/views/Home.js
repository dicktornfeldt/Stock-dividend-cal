import React, { Component } from 'react';
import { connect } from 'react-redux';
import stockData from '../stocklist.json';

class Home extends Component {
  state = {
    stocks: stockData,
    result: stockData,
    input: '',
    portfolio: {},
  };

  addStock = (name, api_id) => {
    let stock = {
      name: name,
      api_id: api_id,
      quantity: '1',
    };
    this.setState({ portfolio: [...this.state.portfolio, stock] });
  };

  editQuantity = event => {
    const api_id = event.target.name;
    const quantity = event.target.value;
    let portfolio = [...this.state.portfolio];
    const index = portfolio.findIndex(stock => stock.api_id === api_id);
    portfolio[index].quantity = quantity;
    this.setState({ portfolio });
  };

  renderStock() {
    if (Object.keys(this.state.portfolio).length !== 0) {
      const stock = this.state.portfolio.map((item, i) => (
        <li key={i}>
          <input type="text" name={item.api_id} onChange={this.editQuantity} />
          {item.name}
        </li>
      ));

      return stock;
    }
  }

  renderStockList() {
    if (this.state.input.length > 0) {
      const stocks = this.state.result.map((item, i) => (
        <li onClick={() => this.addStock(item.name, item.api_id)} key={i}>
          {item.name}
        </li>
      ));

      return stocks;
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

  render() {
    return (
      <div>
        <ul>{this.renderStock()}</ul>
        <input type="text" placeholder="Search" onChange={this.filterStocks} />
        <ul className="list-group">{this.renderStockList()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stocks: state.stockReducer,
  };
}

export default connect(mapStateToProps)(Home);
