import { createStore, combineReducers, applyMiddleware } from 'redux';
import { appReducer } from './reducers';
import logger from "redux-logger";

export default createStore(
  combineReducers({
    app: appReducer
  }),
  applyMiddleware(logger)
);