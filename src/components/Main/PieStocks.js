import React from 'react';
import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';
import { colors } from '../../helpers/';

const PieWrapper = styled.div`
  @media (min-width: 1024px) {
    display: inline-block;
    width: 33%;
    vertical-align: top;
    margin: 0.5rem 0 2.2rem 0;
  }
  p {
    color: ${props => props.theme.grey};
    margin: 0 0 1rem 0;
    @media (min-width: 1024px) {
      margin: 2rem 0 1rem 0;
    }
  }
`;

class PieStocks extends React.PureComponent {
  render() {
    console.log('PieSector component');
    let names = null;
    let value = null;
    let data = null;
    let options = null;

    if (Object.keys(this.props.portfolio).length !== 0) {
      names = this.props.portfolio.map(stock => {
        return stock.name;
      });
      value = this.props.portfolio.map(stock => {
        return stock.value;
      });

      data = {
        labels: names,
        datasets: [
          {
            data: value,
            backgroundColor: colors,
          },
        ],
      };

      options = {
        legend: { display: false },
      };
    }

    return Object.keys(this.props.portfolio).length !== 0 ? (
      <PieWrapper>
        <p>Portföljfördelning</p>
        <Pie data={data} options={options} />
      </PieWrapper>
    ) : null;
  }
}

export default PieStocks;
