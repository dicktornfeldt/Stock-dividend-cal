import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

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

class SidebarStocklist extends React.PureComponent {
  componentDidMount() {
    this.timeout = 0;
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

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

  renderStock() {
    return this.props.stocks.map((item, i) => (
      <li key={i}>
        <input type="text" name={item.api_id} onChange={this.editQuantity} />
        {item.name}
      </li>
    ));
  }

  render() {
    return Object.keys(this.props.stocks).length !== 0 ? (
      <MyStocks>{this.renderStock()}</MyStocks>
    ) : null;
  }
}

function mapStateToProps(state) {
  return {
    stocks: state.portfolioReducer.portfolio,
  };
}

export default connect(mapStateToProps)(SidebarStocklist);
