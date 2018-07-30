import 'regenerator-runtime/runtime';
import { combineReducers } from 'redux';

import { productsReducers } from './ducks';

export const reducers = combineReducers({
    products: productsReducers
});
