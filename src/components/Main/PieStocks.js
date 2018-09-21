import React from 'react';
import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';

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

const getRandomColorEach = count => {
  let data = [];
  for (var i = 0; i < count; i++) {
    const value = (Math.random() * 0xff) | 0;
    const grayscale = (value << 16) | (value << 8) | value;
    const color = '#' + grayscale.toString(16);
    data.push(color);
  }
  return data;
};

const PieStocks = props => {
  let names = null;
  let value = null;
  let data = null;
  let options = null;

  if (Object.keys(props.portfolio).length !== 0) {
    names = props.portfolio.map(stock => {
      return stock.name;
    });
    value = props.portfolio.map(stock => {
      return stock.value;
    });

    data = {
      labels: names,
      datasets: [
        {
          data: value,
          backgroundColor: getRandomColorEach(names.length),
        },
      ],
    };

    options = {
      legend: { display: false },
    };
  }

  return Object.keys(props.portfolio).length !== 0 ? (
    <PieWrapper>
      <p>Portföljfördelning</p>
      <Pie data={data} options={options} />
    </PieWrapper>
  ) : null;
};

export default PieStocks;
