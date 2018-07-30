import 'regenerator-runtime/runtime';
import { call, put } from 'redux-saga/effects';
import gql from 'graphql-tag';
import { apolloClient } from '../../api/apollo.client';
import { productsActions } from '../ducks';

const productsQuery = {
    query: gql`{
        products{
            title
            description
            image {
                path
                alt
            }
            price
            currency
            priceLabel
            productLabel
            cta
            ctaLink
        }
      }`
};

const listProducts = async () => {
    const query = await apolloClient.query(productsQuery);
    return query.data.products;
};

export function* fetchProductsList() {
    try {
        const products = yield call(listProducts);
        yield put(productsActions.saveProducts(products));
    } catch (error) {
        console.log('UNABLE TO FIND DATABASE: Run "yarn db" from the project root to start the GraphQL Server');
    }

}