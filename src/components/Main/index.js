import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { calculateYearSum, groupDividendMonth, calcDividendMonth } from '../../helpers';

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

const Cell = styled.div`
  border-right: 1px solid ${props => props.theme.border};
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
  state = {
    dividends: null,
  };

  componentDidMount() {
    this.setState({ dividends: groupDividendMonth(this.props.portfolio) });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.portfolio !== this.props.portfolio) {
      this.setState({ dividends: groupDividendMonth(this.props.portfolio) });
    }
  }

  render() {
    const { dividends } = this.state;

    const jan = dividends != null ? Math.round(calcDividendMonth(dividends, '01')) : '0';
    const feb = dividends != null ? Math.round(calcDividendMonth(dividends, '02')) : '0';
    const mar = dividends != null ? Math.round(calcDividendMonth(dividends, '03')) : '0';
    const apr = dividends != null ? Math.round(calcDividendMonth(dividends, '04')) : '0';
    const may = dividends != null ? Math.round(calcDividendMonth(dividends, '05')) : '0';
    const jun = dividends != null ? Math.round(calcDividendMonth(dividends, '06')) : '0';
    const jul = dividends != null ? Math.round(calcDividendMonth(dividends, '07')) : '0';
    const aug = dividends != null ? Math.round(calcDividendMonth(dividends, '08')) : '0';
    const sep = dividends != null ? Math.round(calcDividendMonth(dividends, '09')) : '0';
    const okt = dividends != null ? Math.round(calcDividendMonth(dividends, '10')) : '0';
    const nov = dividends != null ? Math.round(calcDividendMonth(dividends, '11')) : '0';
    const dec = dividends != null ? Math.round(calcDividendMonth(dividends, '12')) : '0';

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
