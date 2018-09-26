import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getMonthList } from '../../helpers';

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

const ChildGrow = styled(Child)`
  flex: 1;
  border-right: 1px solid ${props => props.theme.border};
  border-bottom: 1px solid ${props => props.theme.border};
  position: relative;
  ul {
    margin: 0.8rem 2.4rem;
    @media (min-width: 1024px) {
      margin: 0.8rem 0;
    }
    li {
      margin: 0 0 1.3rem 0;
      text-align: left;
      font-family: ${props => props.theme.secondaryfont};
      @media (min-width: 1024px) {
        margin: 0 0.5rem 1.5rem 0.5rem;
        text-align: center;
      }
      &:last-child {
        margin-bottom: 0;
      }
      span {
        font-family: ${props => props.theme.primaryfont};
        @media (min-width: 1024px) {
          margin-bottom: 0.4rem;
          line-height: 1.2;
          font-size: 1.1rem;
          display: block;
        }
      }
    }
  }
  div {
    border-right: none;
  }
`;

const Cell = styled.div`
  border-right: 1px solid ${props => props.theme.border};
  flex-grow: 1;
  flex: 1;
  padding: 0.6rem 0;
  p {
    margin: 0;
  }
  span {
    color: ${props => props.theme.grey};
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

const MonthSpan = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.1rem;
  @media (min-width: 1024px) {
    display: none;
  }
`;

class StockTable extends React.PureComponent {
  getList = month => {
    if (Object.keys(this.props.portfolio).length !== 0) {
      const list = getMonthList(this.props.portfolio, month);
      let response = '-';
      if (list != null) {
        response = list.stocks.map((item, i) => (
          <li key={i}>
            <span>{item.name}</span> {parseFloat(list.dividendArray[i].toFixed(2))}:-
          </li>
        ));
      }
      return response;
    } else {
      return '-';
    }
  };

  render() {
    console.log('Stocktable component');

    return (
      <React.Fragment>
        <Parent>
          <Child>
            <Head>
              <p>Bolagens utdelningar</p>
            </Head>
          </Child>
        </Parent>
        <Parent>
          <ChildGrow>
            <Cell>
              <MonthSpan>Jan</MonthSpan>
              <ul>{this.getList('2018-01')}</ul>
            </Cell>
          </ChildGrow>
          <ChildGrow>
            <Cell>
              <MonthSpan>Feb</MonthSpan>
              <ul>{this.getList('2018-02')}</ul>
            </Cell>
          </ChildGrow>
          <ChildGrow>
            <Cell>
              <MonthSpan>Mar</MonthSpan>
              <ul>{this.getList('2018-03')}</ul>
            </Cell>
          </ChildGrow>
          <ChildGrow>
            <Cell>
              <MonthSpan>Apr</MonthSpan>
              <ul>{this.getList('2018-04')}</ul>
            </Cell>
          </ChildGrow>
          <ChildGrow>
            <Cell>
              <MonthSpan>Maj</MonthSpan>
              <ul>{this.getList('2018-05')}</ul>
            </Cell>
          </ChildGrow>
          <ChildGrow>
            <Cell>
              <MonthSpan>Jun</MonthSpan>
              <ul>{this.getList('2018-06')}</ul>
            </Cell>
          </ChildGrow>
          <ChildGrow>
            <Cell>
              <MonthSpan>Jul</MonthSpan>
              <ul>{this.getList('2018-07')}</ul>
            </Cell>
          </ChildGrow>
          <ChildGrow>
            <Cell>
              <MonthSpan>Aug</MonthSpan>
              <ul>{this.getList('2018-08')}</ul>
            </Cell>
          </ChildGrow>
          <ChildGrow>
            <Cell>
              <MonthSpan>Sep</MonthSpan>
              <ul>{this.getList('2018-09')}</ul>
            </Cell>
          </ChildGrow>
          <ChildGrow>
            <Cell>
              <MonthSpan>Okt</MonthSpan>
              <ul>{this.getList('2018-10')}</ul>
            </Cell>
          </ChildGrow>
          <ChildGrow>
            <Cell>
              <MonthSpan>Nov</MonthSpan>
              <ul>{this.getList('2018-11')}</ul>
            </Cell>
          </ChildGrow>
          <ChildGrow>
            <Cell>
              <MonthSpan>Dec</MonthSpan>
              <ul>{this.getList('2018-12')}</ul>
            </Cell>
          </ChildGrow>
        </Parent>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    portfolio: state.portfolioReducer.portfolio,
  };
}

export default connect(mapStateToProps)(StockTable);
