import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getDividendMonth } from '../../helpers';
import PorfolioSum from './PorfolioSum';
import PieStocks from './PieStocks';
import PieSector from './PieSector';
import DividendSumTable from './DividendSumTable';
import YearTable from './YearTable';
import StockTable from './StockTable';

const MainContent = styled.main`
  text-align: center;
  @media (min-width: 1024px) {
    margin-left: 30rem;
  }
`;

class Main extends React.PureComponent {
  render() {
    const { portfolio } = this.props;

    let portfolioSum = 0;
    if (Object.keys(portfolio).length !== 0) {
      portfolioSum = portfolio.map(value => value.value).reduce((prev, next) => prev + next);
    }

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

    let DA = 0;
    if (Object.keys(portfolio).length !== 0) {
      DA = (year / portfolioSum) * 100;
    }

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
        <PorfolioSum portfolioSum={portfolioSum} DA={DA} />
        <PieStocks portfolio={portfolio} />
        <PieSector portfolio={portfolio} />
        <DividendSumTable year={year} />
        <YearTable data={data} />
        <StockTable />
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
