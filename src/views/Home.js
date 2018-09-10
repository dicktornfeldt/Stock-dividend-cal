import React, { Component } from 'react';
import { connect } from 'react-redux';
import stockData from '../stocklist.json';
import styled from 'styled-components';
import { H1 } from '../theme/typo';
import Plus from '../images/plus.svg';

const Sidebar = styled.div`
  background-color: ${props => props.theme.grey};
  border-right: 1px solid ${props => props.theme.border};
  width: 30rem;
  position: fixed;
  font-size: 1.2rem;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 2.5rem;
  overflow-y: scroll;
`;

const Main = styled.main`
  display: inline-block;
`;

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

const MyStocks = styled.ul`
  border-bottom: 3px solid ${props => props.theme.border};
  margin: 0 0 2rem 0;
  padding: 0 0 1rem 0;
  li {
    margin-bottom: 0.5rem;
    white-space: nowrap;
  }
  input {
    border: 1px solid ${props => props.theme.border};
    padding: 0.4rem 0.3rem 0.3rem 0.3rem;
    width: 3.4rem;
    margin-right: 0.6rem;
    &:focus {
      outline: none;
      border: 1px solid #747480;
    }
  }
`;

class Home extends Component {
  state = {
    stocks: stockData,
    result: stockData,
    input: '',
    portfolio: {},
  };
  componentDidMount() {
    this.timeout = 0;
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  addStock = (name, api_id) => {
    let stock = {
      name: name,
      api_id: api_id,
      quantity: '0',
      value: 0,
      dividends: {},
    };
    this.setState({ portfolio: [...this.state.portfolio, stock] });
  };

  editQuantity = event => {
    const name = event.target.name;
    const quantity = event.target.value;
    let portfolio = this.state.portfolio;
    const index = portfolio.findIndex(stock => stock.api_id === name);

    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      fetch(
        `https://cors-anywhere.herokuapp.com/https://www.avanza.se/_mobile/market/stock/${name}`
      )
        .then(response => response.json())
        .then(data => {
          portfolio[index].value = data.lastPrice * parseInt(quantity, 10);
          portfolio[index].dividends = data.dividends;
          portfolio[index].quantity = quantity;
          this.setState({ portfolio });
        })
        // Catch any errors we hit and update the app
        .catch(error => this.setState({ error, isLoading: false }));
    }, 700);
  };

  renderSum() {
    if (Object.keys(this.state.portfolio).length !== 0) {
      const sum = this.state.portfolio.map(item => item.value).reduce((prev, next) => prev + next);
      return sum;
    }
  }
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
    const portfolio = Object.keys(this.state.portfolio).length;

    return (
      <React.Fragment>
        <Sidebar>
          <H1>Utdelningskalender</H1>
          {portfolio !== 0 && <MyStocks>{this.renderStock()}</MyStocks>}

          <Input type="text" placeholder="Sök aktie" onChange={this.filterStocks} />
          <StockList>{this.renderStockList()}</StockList>
        </Sidebar>
        <Main>
          <div>{this.renderSum()}</div>
        </Main>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    stocks: state.stockReducer,
  };
}

export default connect(mapStateToProps)(Home);
