import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

import SidebarSearch from './SidebarSearch';
import SidebarPortfolio from './SidebarPortfolio';
import SidebarLoading from './SidebarLoading';
import SidebarSwitch from './SidebarSwitch';
import Tooltip from '../Tooltip';
import { H1 } from '../../theme/typo';

const Side = styled.div`
  background-color: ${props => props.theme.lightgrey};
  border-right: 1px solid ${props => props.theme.border};
  width: 100%;
  position: fixed;
  z-index: 99;
  font-size: 1.4rem;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2.5rem 3.5rem;
  overflow-y: scroll;
  transition-timing-function: ease-in;
  transition: 0.2s;
  transform: translateX(-100%);
  ${props =>
    props.sidebarVisible &&
    css`
      transition-timing-function: ease-out;
      transition: 0.25s;
      transform: translateX(0);
    `};
  @media (min-width: 1024px) {
    width: 30rem;
    font-size: 1.2rem;
    transform: translateX(0);
    padding: 2.5rem;
    right: auto;
  }
`;

const StyledH1 = styled(H1)`
  text-align: center;
  @media (min-width: 1024px) {
    text-align: left;
  }
  span {
    font-size: 2.5rem;
    position: relative;
    top: 0.2rem;
    @media (min-width: 1024px) {
      font-size: 3rem;
    }
  }
`;

class Sidebar extends Component {
  state = {
    sidebarVisible: false,
  };

  handleClick = () => {
    this.setState(state => ({
      sidebarVisible: !state.sidebarVisible,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Side sidebarVisible={this.state.sidebarVisible}>
          <StyledH1>
            Portföljen{' '}
            <span role="img" aria-label="emoji">
              🤑
            </span>
          </StyledH1>
          <SidebarPortfolio />
          <SidebarSearch />
          {this.props.loading && <SidebarLoading />}
          {Object.keys(this.props.portfolio).length === 0 && <Tooltip />}
        </Side>
        <SidebarSwitch sidebarVisible={this.state.sidebarVisible} onClick={this.handleClick} />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.appReducer.loading,
    portfolio: state.portfolioReducer.portfolio,
  };
}

export default connect(mapStateToProps)(Sidebar);
