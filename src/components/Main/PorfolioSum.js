import React from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.div`
  display: inline-block;
  width: 33%;
  padding: 3.5rem 0 1rem 0;
  span {
    color: ${props => props.theme.grey};
  }
  p {
    font-family: ${props => props.theme.secondaryfont};
    margin: 0 0 1.5rem 0;
    font-weight: bold;
    font-size: 3.5rem;
  }
`;

const PorfolioSum = props => (
  <PortfolioContainer>
    <span>Portföljvärde</span>
    <p>{Math.round(props.portfolioSum)}:-</p>
    <span>Direktavkastning</span>
    <p>{props.DA.toFixed(2)}%</p>
  </PortfolioContainer>
);

export default PorfolioSum;
