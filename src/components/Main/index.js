import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getDividendMonth, getMonthList } from '../../helpers';
import YearTable from './YearTable';

const MainContent = styled.main`
  text-align: center;
  @media (min-width: 1024px) {
    margin-left: 30rem;
  }
`;

const Parent = styled.section`
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
        margin: 0 0.5rem 2rem 0.5rem;
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

const Content = styled.div`
  border-right: 1px solid ${props => props.theme.border};
  p {
    font-family: ${props => props.theme.secondaryfont};
    font-weight: bold;
    font-size: 3.5rem;
    margin: 0;
    padding: 1.8rem 0;
    @media (min-width: 1024px) {
      padding: 3rem 0;
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

const MonthSpan = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.1rem;
  @media (min-width: 1024px) {
    display: none;
  }
`;

class Main extends Component {
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
    const { portfolio } = this.props;

    const jan = portfolio != null ? Math.round(getDividendMonth(portfolio, '2018-01')) : 0;
    const feb = portfolio != null ? Math.round(getDividendMonth(portfolio, '2018-02')) : 0;
    const mar = portfolio != null ? Math.round(getDividendMonth(portfolio, '2018-03')) : 0;
    const apr = portfolio != null ? Math.round(getDividendMonth(portfolio, '2018-04')) : 0;
    const may = portfolio != null ? Math.round(getDividendMonth(portfolio, '2018-05')) : 0;
    const jun = portfolio != null ? Math.round(getDividendMonth(portfolio, '2018-06')) : 0;
    const jul = portfolio != null ? Math.round(getDividendMonth(portfolio, '2018-07')) : 0;
    const aug = portfolio != null ? Math.round(getDividendMonth(portfolio, '2018-08')) : 0;
    const sep = portfolio != null ? Math.round(getDividendMonth(portfolio, '2018-09')) : 0;
    const okt = portfolio != null ? Math.round(getDividendMonth(portfolio, '2018-10')) : 0;
    const nov = portfolio != null ? Math.round(getDividendMonth(portfolio, '2018-11')) : 0;
    const dec = portfolio != null ? Math.round(getDividendMonth(portfolio, '2018-12')) : 0;

    const q1 = jan + feb + mar;
    const q2 = apr + may + jun;
    const q3 = jul + aug + sep;
    const q4 = okt + nov + dec;

    const half1 = q1 + q2;
    const half2 = q3 + q4;

    const year = half1 + half2;

    const data = {
      jan,
      feb,
      mar,
      apr,
      may,
      jun,
      jul,
      aug,
      sep,
      okt,
      nov,
      dec,
      q1,
      q2,
      q3,
      q4,
      half1,
      half2,
    };

    return (
      <MainContent>
        <Parent>
          <Child>
            <Head>
              <p>Totalt utdelningar 2018</p>
            </Head>
            <Content>
              <p>{year}:-</p>
            </Content>
          </Child>
          <Child>
            <Head>
              <p>Snitt i månaden</p>
            </Head>
            <Content>
              <p>{Math.round(year / 12)}:-</p>
            </Content>
          </Child>
          <Child>
            <Head>
              <p>Snitt per...</p>
            </Head>
            <Content>
              <DL>
                <dt>Kvartal:</dt>
                <dd>{(year / 4).toFixed(2)}:-</dd>
                <dt>Dag:</dt>
                <dd>{(year / 365).toFixed(2)}:-</dd>
                <dt>Timme:</dt>
                <dd>{(year / 8760).toFixed(4)}:-</dd>
                <dt>Minut:</dt>
                <dd>{(year / 525600).toFixed(6)}:-</dd>
              </DL>
            </Content>
          </Child>
        </Parent>

        <YearTable data={data} />

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
      </MainContent>
    );
  }
}

function mapStateToProps(state) {
  return {
    portfolio: state.portfolioReducer.portfolio,
  };
}

export default connect(mapStateToProps)(Main);
