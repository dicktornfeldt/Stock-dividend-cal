import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

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
  renderYearSum() {
    if (Object.keys(this.props.portfolio).length !== 0) {
      const yearArray = this.props.portfolio.map(stock => {
        const quantity = stock.quantity;
        return stock.dividends
          .map(dividend => dividend.amountPerShare * quantity)
          .reduce((prev, next) => prev + next);
      });
      const sum = yearArray.map(value => value).reduce((prev, next) => prev + next);
      return sum.toFixed(2);
    } else {
      return '0';
    }
  }

  monthAverage() {
    return this.renderYearSum() === '0' ? '0' : (this.renderYearSum() / 12).toFixed(2);
  }

  quarterAverage() {
    return this.renderYearSum() === '0' ? '0' : (this.renderYearSum() / 4).toFixed(2);
  }

  dayAverage() {
    return this.renderYearSum() === '0' ? '0' : (this.renderYearSum() / 365).toFixed(2);
  }

  hourAverage() {
    return this.renderYearSum() === '0' ? '0' : (this.renderYearSum() / 8760).toFixed(4);
  }

  minuteAverage() {
    return this.renderYearSum() === '0' ? '0' : (this.renderYearSum() / 525600).toFixed(6);
  }

  render() {
    return (
      <MainContent>
        <Parent>
          <Child>
            <Head>
              <p>Utdelningar i år</p>
            </Head>
            <Content>
              <p>{this.renderYearSum()}:-</p>
            </Content>
          </Child>
          <Child>
            <Head>
              <p>Snitt i månaden</p>
            </Head>
            <Content>
              <p>{this.monthAverage()}:-</p>
            </Content>
          </Child>
          <Child>
            <Head>
              <p>Snitt per...</p>
            </Head>
            <Content>
              <DL>
                <dt>Kvartal:</dt>
                <dd>{this.quarterAverage()}:-</dd>
                <dt>Dag:</dt>
                <dd>{this.dayAverage()}:-</dd>
                <dt>Timme:</dt>
                <dd>{this.hourAverage()}:-</dd>
                <dt>Minut:</dt>
                <dd>{this.minuteAverage()}:-</dd>
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
              <p>14 000:-</p>
            </Cell>
          </Child>
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
          <Child>
            <Cell>
              <p>14 000:-</p>
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
