import React from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.div`
  padding: 2.5rem 1.5rem 1rem 1.5rem;
  @media (min-width: 1024px) {
    display: inline-block;
    width: 33%;
    padding: 5rem 0 1rem 0;
  }
  span {
    color: ${props => props.theme.grey};
  }
  p {
    font-family: ${props => props.theme.secondaryfont};
    margin: 0 0 2rem 0;
    font-weight: bold;
    font-size: 3.5rem;
    @media (min-width: 1024px) {
      margin: 0 0 2.5rem 0;
    }
  }
`;

const PorfolioSum = props =>
  props.portfolioSum ? (
    <PortfolioContainer>
      <React.Fragment>
        <span>Portföljvärde</span>
        <p>{Math.round(props.portfolioSum)}:-</p>
        <span>Direktavkastning</span>
        <p>{props.DA.toFixed(2)}%</p>
      </React.Fragment>
    </PortfolioContainer>
  ) : null;

export default PorfolioSum;
