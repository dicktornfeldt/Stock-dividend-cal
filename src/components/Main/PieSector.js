import React from 'react';
import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';

const PieWrapper = styled.div`
  margin: 0.5rem 0 2.2rem 0;
  @media (min-width: 1024px) {
    display: inline-block;
    width: 33%;
    vertical-align: top;
    margin: 0.5rem 0 2.2rem 0;
  }
  p {
    color: ${props => props.theme.grey};
    margin-bottom: 1rem;
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

const PieSector = props => {
  let sector = null;
  let data = null;
  let names = null;
  let dataset = null;
  let options = null;

  if (Object.keys(props.portfolio).length !== 0) {
    sector = props.portfolio.map(stock => {
      return stock.sector ? stock.sector : null;
    });

    let counts = {},
      i,
      value;
    for (i = 0; i < sector.length; i++) {
      value = sector[i];
      if (typeof counts[value] === 'undefined') {
        counts[value] = 1;
      } else {
        counts[value]++;
      }
    }

    if (counts) {
      let object = Object.keys(counts).map(e => ({ name: e, count: counts[e] }));
      console.log(object);
      object = object.filter(function(obj) {
        return obj.name !== 'null';
      });
      console.log(object);

      names = object.map(stock => {
        return stock.name;
      });
      data = object.map(stock => {
        return stock.count;
      });
    }

    dataset = {
      labels: names,
      datasets: [
        {
          data: data,
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
      <p>Branschfördelning</p>
      <Pie data={dataset} options={options} />
    </PieWrapper>
  ) : null;
};

export default PieSector;
