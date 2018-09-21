import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Parent = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const Child = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    flex-grow: 1;
    width: 33%;
  }
`;

const Head = styled.div`
  background-color: ${props => props.theme.lightgrey};
  border-right: 1px solid ${props => props.theme.border};
  border-top: 1px solid ${props => props.theme.border};
  border-bottom: 1px solid ${props => props.theme.border};
  padding: 0.6rem 0;
  @media (min-width: 1024px) {
    padding: 0.8rem 0;
  }

  p {
    font-weight: bold;
    font-size: 1.3rem;
    margin: 0;
  }
`;

const Content = styled.div`
  border-right: 1px solid ${props => props.theme.border};
  p {
    font-family: ${props => props.theme.secondaryfont};
    font-weight: bold;
    font-size: 3.5rem;
    margin: 0;
    padding: 1.8rem 0;
    @media (min-width: 1024px) {
      padding: 2.9rem 0;
    }
  }
`;

const DL = styled.dl`
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  font-weight: bold;
  padding: 1.5rem 0;
  dt {
    margin: 0 2% 0 0;
    width: 48%;
    text-align: right;
    color: ${props => props.theme.grey};
    font-weight: normal;
  }
  dd {
    margin: 0 0 0 2%;
    width: 48%;
    text-align: left;
    font-family: ${props => props.theme.secondaryfont};
  }
`;

const DividendSumTable = props => {
  return (
    <Parent>
      <Child>
        <Head>
          <p>Totalt utdelningar 2018</p>
        </Head>
        <Content>
          <p>{props.year}:-</p>
        </Content>
      </Child>
      <Child>
        <Head>
          <p>Snitt i månaden</p>
        </Head>
        <Content>
          <p>{Math.round(props.year / 12)}:-</p>
        </Content>
      </Child>
      <Child>
        <Head>
          <p>Snitt per...</p>
        </Head>
        <Content>
          <DL>
            <dt>Kvartal:</dt>
            <dd>{(props.year / 4).toFixed(2)}:-</dd>
            <dt>Dag:</dt>
            <dd>{(props.year / 365).toFixed(2)}:-</dd>
            <dt>Timme:</dt>
            <dd>{(props.year / 8760).toFixed(4)}:-</dd>
            <dt>Minut:</dt>
            <dd>{(props.year / 525600).toFixed(6)}:-</dd>
          </DL>
        </Content>
      </Child>
    </Parent>
  );
};

function mapStateToProps(state) {
  return {
    portfolio: state.portfolioReducer.portfolio,
  };
}

export default connect(mapStateToProps)(DividendSumTable);
