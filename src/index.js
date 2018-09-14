import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import throttle from 'lodash.throttle';
import 'sanitize.css/sanitize.css';

import store, { history } from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { saveState } from './reducers/localStorage';

// persist state to localstorage
store.subscribe(
  throttle(() => {
    saveState({
      portfolioReducer: store.getState().portfolioReducer,
    });
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
