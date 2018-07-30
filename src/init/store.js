import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import { reducers } from '../redux/index';
import { sagas } from '../redux/sagas/index';

export const history = createHistory();

const reactRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
    reactRouterMiddleware,
    sagaMiddleware
];
const enhancer = compose(
    applyMiddleware(...middlewares)
);
// create the store
const store = createStore(reducers, enhancer);
sagaMiddleware.run(sagas);

export default store;