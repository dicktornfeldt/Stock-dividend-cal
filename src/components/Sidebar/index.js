import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SidebarSearch from './SidebarSearch';
import SidebarPortfolio from './SidebarPortfolio';
import SidebarLoading from './SidebarLoading';
import { H1 } from '../../theme/typo';

const Side = styled.div`
  background-color: ${props => props.theme.lightgrey};
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

const StyledH1 = styled(H1)`
  span {
    font-size: 2.2rem;
    position: relative;
    top: 0.2rem;
  }
`;

class Sidebar extends Component {
  render() {
    return (
      <Side>
        <StyledH1>
          Portföljen{' '}
          <span role="img" aria-label="emoji">
            🤑
          </span>
        </StyledH1>
        <SidebarPortfolio />
        <SidebarSearch />
        {this.props.loading && <SidebarLoading />}
      </Side>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.portfolioReducer.loading,
  };
}

export default connect(mapStateToProps)(Sidebar);
