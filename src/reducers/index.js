import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import portfolioReducer from './portfolioReducer';

export default combineReducers({
  router: routerReducer,
  portfolioReducer,
});
