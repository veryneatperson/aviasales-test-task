import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import searchIdReducer from './reducers/searchId';
import ticketsReducer from './reducers/tickets';
import selectionReducer from './reducers/selection';
import { watchTickets } from './sagas';

const composeEnhancers = process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : null || compose;

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  searchId: searchIdReducer,
  tickets: ticketsReducer,
  selection: selectionReducer,
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(watchTickets);

export default store;
