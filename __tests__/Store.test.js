import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { products } from '../gql-server/database/data';

const getProducts = () => ({ type: 'products/FETCH_PRODUCTS' });

describe('Redux store', () => {
    const initialState = {
        products,
        loading: false,
        productsFetchError: ''
    };
    const middlewares = [];
    const mockStore = configureStore(middlewares);
    const store = mockStore(initialState);

    test('should dispatch an action', () => {
        store.dispatch(getProducts());
        const actions = store.getActions();
        const expectedPayload = { type: 'products/FETCH_PRODUCTS' };
        expect(actions).toEqual([expectedPayload]);
    });

    test('should hold correct data in state', () => {
        const state = store.getState();
        expect(state).toEqual(initialState);
    });
});