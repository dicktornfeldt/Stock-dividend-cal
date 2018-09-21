import React, { Component } from 'react';
import styled from 'styled-components';
import PieChart from 'react-minimal-pie-chart';

const PieWrapper = styled.div`
  @media (min-width: 1024px) {
    display: inline-block;
    width: 33%;
    vertical-align: top;
    height: 20rem;
    margin: 2.5rem 0 0 0;
  }
`;

const PieInner = styled.div`
  width: 17rem;
  display: inline-block;
  text-align: center;
`;

class PieStocks extends Component {
  render() {
    let newdata = null;

    const colors = ['#ccc', '#eee', '#ddd', '#bbb'];

    if (Object.keys(this.props.portfolio).length !== 0) {
      newdata = this.props.portfolio.map(stock => {
        return {
          name: stock.name,
          value: stock.value,
          color: colors[Math.floor(Math.random() * colors.length)],
        };
      });
    }

    return Object.keys(this.props.portfolio).length !== 0 ? (
      <PieWrapper>
        <PieInner>
          <PieChart data={newdata} animate={true} />
        </PieInner>
      </PieWrapper>
    ) : null;
  }
}

export default PieStocks;
