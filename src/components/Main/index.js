import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getDividendMonth, getMonthList } from '../../helpers';

const MainContent = styled.main`
  margin-left: 30rem;
  text-align: center;
`;

const Parent = styled.section`
  display: flex;
`;

const Child = styled.div`
  flex-grow: 1;
  width: 33%;
`;

const ChildGrow = styled(Child)`
  flex: 1;
  border-right: 1px solid ${props => props.theme.border};
  border-bottom: 1px solid ${props => props.theme.border};
  ul {
    li {
      margin: 0 0.5rem 1rem 0.5rem;
      span {
        font-size: 1.1rem;
        display: block;
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

  p {
    font-weight: bold;
    font-size: 1.3rem;
    margin: 0;
  }
`;

const Content = styled.div`
  border-right: 1px solid ${props => props.theme.border};
  p {
    font-weight: bold;
    font-size: 3.5rem;
    margin: 0;
    padding: 3rem 0;
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
            <span>{item.name}</span> {list.dividendArray[i]}:-
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

    return (
      <MainContent>
        <Parent>
          <Child>
            <Head>
              <p>Utdelningar i år</p>
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

        <Parent>
          <Child>
            <Head>
              <p>Första halvåret</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Andra halvåret</p>
            </Head>
          </Child>
        </Parent>

        <Parent>
          <Child>
            <Cell>
              <p>{half1}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{half2}:-</p>
            </Cell>
          </Child>
        </Parent>
        <Parent>
          <Child>
            <Head>
              <p>Q1</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Q2</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Q3</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Q4</p>
            </Head>
          </Child>
        </Parent>
        <Parent>
          <Child>
            <Cell>
              <p>{q1}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{q2}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{q3}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{q4}:-</p>
            </Cell>
          </Child>
        </Parent>
        <Parent>
          <Child>
            <Head>
              <p>Jan</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Feb</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Mar</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Apr</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Maj</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Jun</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Jul</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Aug</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Sep</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Okt</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Nov</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Dec</p>
            </Head>
          </Child>
        </Parent>
        <Parent>
          <Child>
            <Cell>
              <p>{jan}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{feb}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{mar}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{apr}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{may}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{jun}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{jul}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{aug}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{sep}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{okt}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{nov}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{dec}:-</p>
            </Cell>
          </Child>
        </Parent>
        <Parent>
          <Child>
            <Head>
              <p>Aktieutdelningar</p>
            </Head>
          </Child>
        </Parent>
        <Parent>
          <ChildGrow>
            <Cell>
              <ul>{this.getList('2018-01')}</ul>
            </Cell>
          </ChildGrow>
          <ChildGrow>
            <Cell>
              <ul>{this.getList('2018-02')}</ul>
            </Cell>
          </ChildGrow>
          <ChildGrow>
            <Cell>
              <ul>{this.getList('2018-03')}</ul>
            </Cell>
          </ChildGrow>
          <ChildGrow>
            <Cell>
              <ul>{this.getList('2018-04')}</ul>
            </Cell>
          </ChildGrow>
          <ChildGrow>
            <Cell>
              <ul>{this.getList('2018-05')}</ul>
            </Cell>
          </ChildGrow>
          <ChildGrow>
            <Cell>
              <ul>{this.getList('2018-06')}</ul>
            </Cell>
          </ChildGrow>
          <ChildGrow>
            <Cell>
              <ul>{this.getList('2018-07')}</ul>
            </Cell>
          </ChildGrow>
          <ChildGrow>
            <Cell>
              <ul>{this.getList('2018-08')}</ul>
            </Cell>
          </ChildGrow>
          <ChildGrow>
            <Cell>
              <ul>{this.getList('2018-09')}</ul>
            </Cell>
          </ChildGrow>
          <ChildGrow>
            <Cell>
              <ul>{this.getList('2018-10')}</ul>
            </Cell>
          </ChildGrow>
          <ChildGrow>
            <Cell>
              <ul>{this.getList('2018-11')}</ul>
            </Cell>
          </ChildGrow>
          <ChildGrow>
            <Cell>
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
