import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import portfolioReducer from './portfolioReducer';
import appReducer from './appReducer';

export default combineReducers({
  router: routerReducer,
  portfolioReducer,
  appReducer,
});
