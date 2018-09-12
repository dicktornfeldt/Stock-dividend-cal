import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { editStock, recalcStock } from '../../actions/stockActions';
import Loading from '../../images/loading-2.svg';

const MyStocks = styled.ul`
  border-bottom: 3px solid ${props => props.theme.border};
  margin: 0 0 2rem 0;
  padding: 0 0 1rem 0;
  position: relative;
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

const Load = styled.div`
  position: absolute;
  margin: auto;
  padding: 1rem 0;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.75);
  img {
    width: 7rem;
    display: inline-block;
    height: 1.7rem;
    position: absolute;
    left: 0;
    bottom: auto;
    right: 0;
    margin: auto;
    top: 50%;
    top: 49%;
    transform: translateY(-50%);
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
    const api_id = event.target.name;
    const quantity = event.target.value;
    const current_quantity = event.target.attributes.getNamedItem('data-quantity').value;

    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if (current_quantity < 1) {
        this.props.editStock(quantity, api_id);
      } else {
        this.props.recalcStock(quantity, api_id);
      }
    }, 500);
  };

  renderStock() {
    return this.props.stocks.map((item, i) => (
      <li key={i}>
        <input
          data-quantity={item.quantity}
          type="text"
          name={item.api_id}
          onChange={this.editQuantity}
        />
        {item.name}
      </li>
    ));
  }

  render() {
    return Object.keys(this.props.stocks).length !== 0 ? (
      <MyStocks>
        {this.props.loading && (
          <Load>
            <img src={Loading} alt="loading" />
          </Load>
        )}
        {this.renderStock()}
      </MyStocks>
    ) : null;
  }
}

function mapStateToProps(state) {
  return {
    stocks: state.portfolioReducer.portfolio,
    loading: state.portfolioReducer.loading,
  };
}

export default connect(
  mapStateToProps,
  { editStock, recalcStock }
)(SidebarStocklist);
