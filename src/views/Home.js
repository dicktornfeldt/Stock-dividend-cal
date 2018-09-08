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
    };
    this.setState({ portfolio: [...this.state.portfolio, stock] });
  };

  renderStock() {
    if (Object.keys(this.state.portfolio).length !== 0) {
      return this.state.portfolio.map(({ name, api_id }) => <li key={api_id}>{name}</li>);
    }
  }

  renderStockList() {
    if (this.state.input.length > 0) {
      return this.state.result.map(({ name, short_name, api_id }) => (
        <li onClick={() => this.addStock(name, api_id)} key={api_id}>
          {name}
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
