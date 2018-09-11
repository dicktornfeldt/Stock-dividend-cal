import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SidebarSearch from './SidebarSearch';
import SidebarStocklist from './SidebarStocklist';
import { H1 } from '../../theme/typo';

const Side = styled.div`
  background-color: ${props => props.theme.grey};
  border-right: 1px solid ${props => props.theme.border};
  width: 30rem;
  position: fixed;
  font-size: 1.2rem;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 2.5rem;
  overflow-y: scroll;
`;

class Sidebar extends Component {
  renderSum() {
    if (Object.keys(this.state.portfolio).length !== 0) {
      const sum = this.state.portfolio.map(item => item.value).reduce((prev, next) => prev + next);
      return sum;
    }
  }

  render() {
    return (
      <Side>
        <H1>Utdelningskalender</H1>

        <React.Fragment>
          <SidebarStocklist />
          {/* <PortfolioData>{this.renderSum()}</PortfolioData> */}
        </React.Fragment>

        <SidebarSearch />
      </Side>
    );
  }
}

function mapStateToProps(state) {
  return {
    stocks: state.stockReducer,
  };
}

export default connect(mapStateToProps)(Sidebar);
