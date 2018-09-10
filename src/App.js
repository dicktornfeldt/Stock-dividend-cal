import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './theme/globalStyle';
import { theme } from './theme/theme';
import Home from './views/Home';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route component={NoMatch404} /> */}
          </Switch>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
