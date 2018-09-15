import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';

import { GlobalStyle } from './theme/globalStyle';
import { theme } from './theme/theme';
import Home from './views/Home';
import FAQ from './components/FAQ';

const title = 'Din utdelningskalender';
const desc = 'Bygg din aktieportfölj och få en överblick över dina utdelningar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Helmet>
              <title>{title}</title>
              <meta name="description" content={desc} />
              <meta property="og:title" content="{title}" />
              <meta property="og:description" content={desc} />
              <meta property="og:url" content={window.location.href} />
              {/* <meta property="og:image" content={NextoryMetaImg} /> */}
              <meta name="twitter:title" content="Portföljen" />
            </Helmet>
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route component={NoMatch404} /> */}
            </Switch>
            <FAQ />
          </React.Fragment>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
