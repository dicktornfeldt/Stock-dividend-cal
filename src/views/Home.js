import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Sidebar from '../components/Sidebar';

const Main = styled.main`
  display: inline-block;
`;

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Sidebar />
        <Main />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    stocks: state.stockReducer,
  };
}

export default connect(mapStateToProps)(Home);
