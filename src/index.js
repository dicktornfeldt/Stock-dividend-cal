import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import throttle from 'lodash.throttle';
import 'sanitize.css/sanitize.css';

import store, { history } from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// remove all current serviceworkers
navigator.serviceWorker.getRegistrations().then(function(registrations) {
  for (let registration of registrations) {
    registration.unregister();
  }
});
