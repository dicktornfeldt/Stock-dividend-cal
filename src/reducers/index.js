import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import stockReducer from './stockReducer';

export default combineReducers({
  router: routerReducer,
  stockReducer,
});
