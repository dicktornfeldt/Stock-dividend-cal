import React, { Component } from 'react';
import { connect } from 'react-redux';
import stockData from '../stocklist.json';

class Home extends Component {
  state = {
    stocks: stockData,
    result: stockData,
  };

  handleChange = event => {
    this.setState({
      inputVal: event.target.value,
    });
  };

  renderStocks() {
    return this.state.result.map(({ name, short_name }) => <li key={short_name}>{name}</li>);
  }

  filterStocks = event => {
    let result = [];
    result = this.state.stocks.filter(stock => {
      return stock.name.toLowerCase().search(event.target.value) !== -1;
    });
    this.setState({ result });
  };

  render() {
    return (
      <div>
        <input type="text" placeholder="Search" onChange={this.filterStocks} />
        <ul className="list-group">{this.renderStocks()}</ul>
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
