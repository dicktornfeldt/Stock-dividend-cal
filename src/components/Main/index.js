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
    yearSum: '0',
    dividends: null,
  };

  componentDidMount() {
    const yearSum = calculateYearSum(this.props.portfolio);
    this.setState({ yearSum });

    const dividends = groupDividendMonth(this.props.portfolio);
    this.setState({ dividends });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.portfolio !== this.props.portfolio) {
      const yearSum = calculateYearSum(this.props.portfolio);
      this.setState({ yearSum });

      const dividends = groupDividendMonth(this.props.portfolio);
      this.setState({ dividends });
    }
  }

  render() {
    const { dividends } = this.state;

    if (dividends != null) {
      // const may = dividends.filter(month => month['05']).map(month => month['05']);
      // console.log(may);
      // if (may.length > 0) {
      //   const calc = may
      //     .map(dividend => dividend.amountPerShare * dividend.quantity)
      //     .reduce((prev, next) => prev + next);
      //   console.log(calc);
      // }

      const test = calcDividendMonth(dividends, '05');
      console.log(test);
    }
    return (
      <MainContent>
        <Parent>
          <Child>
            <Head>
              <p>Utdelningar i år</p>
            </Head>
            <Content>
              <p>{(this.state.yearSum / 1).toFixed(0)}:-</p>
            </Content>
          </Child>
          <Child>
            <Head>
              <p>Snitt i månaden</p>
            </Head>
            <Content>
              <p>{this.state.yearSum === '0' ? '0' : (this.state.yearSum / 12).toFixed(0)}:-</p>
            </Content>
          </Child>
          <Child>
            <Head>
              <p>Snitt per...</p>
            </Head>
            <Content>
              <DL>
                <dt>Kvartal:</dt>
                <dd>{this.state.yearSum === '0' ? '0' : (this.state.yearSum / 4).toFixed(2)}:-</dd>
                <dt>Dag:</dt>
                <dd>
                  {this.state.yearSum === '0' ? '0' : (this.state.yearSum / 365).toFixed(2)}:-
                </dd>
                <dt>Timme:</dt>
                <dd>
                  {this.state.yearSum === '0' ? '0' : (this.state.yearSum / 8760).toFixed(4)}:-
                </dd>
                <dt>Minut:</dt>
                <dd>
                  {this.state.yearSum === '0' ? '0' : (this.state.yearSum / 525600).toFixed(6)}:-
                </dd>
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
              <p>14 000:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>14 000:-</p>
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
              <p> 14 000:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p> 14 000:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p> 14 000:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p> 14 000:-</p>
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
              <p>{dividends != null ? calcDividendMonth(dividends, '01') : '0'}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{dividends != null ? calcDividendMonth(dividends, '02') : '0'}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{dividends != null ? calcDividendMonth(dividends, '03') : '0'}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{dividends != null ? calcDividendMonth(dividends, '04') : '0'}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{dividends != null ? calcDividendMonth(dividends, '05') : '0'}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{dividends != null ? calcDividendMonth(dividends, '06') : '0'}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{dividends != null ? calcDividendMonth(dividends, '07') : '0'}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{dividends != null ? calcDividendMonth(dividends, '08') : '0'}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{dividends != null ? calcDividendMonth(dividends, '09') : '0'}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{dividends != null ? calcDividendMonth(dividends, '10') : '0'}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{dividends != null ? calcDividendMonth(dividends, '11') : '0'}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{dividends != null ? calcDividendMonth(dividends, '12') : '0'}:-</p>
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
