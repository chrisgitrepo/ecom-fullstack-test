import 'regenerator-runtime/runtime';
import { all, takeLatest } from 'redux-saga/effects';

import { fetchProductsList } from './products.saga';

import { productsTypes } from '../ducks';

const fetchProductsListSaga = takeLatest(productsTypes.FETCH_PRODUCTS, fetchProductsList);

// main saga generators
export function* sagas() {
    yield all([fetchProductsListSaga]);
}