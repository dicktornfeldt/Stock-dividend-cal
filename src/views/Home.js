import React, { Component } from 'react';

import Sidebar from '../components/Sidebar';
import Main from '../components/Main';

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

export default Home;
