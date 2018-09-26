import React from 'react';
import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';
import { colors } from '../../helpers/';

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

class PieSector extends React.PureComponent {
  render() {
    console.log('PieSector component');

    let sector = null;
    let data = null;
    let names = null;
    let dataset = null;
    let options = null;

    if (Object.keys(this.props.portfolio).length !== 0) {
      sector = this.props.portfolio.map(stock => {
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

        object = object.filter(function(obj) {
          return obj.name !== 'null';
        });

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
        <p>Branschfördelning</p>
        <Pie data={dataset} options={options} />
      </PieWrapper>
    ) : null;
  }
}

export default PieSector;
