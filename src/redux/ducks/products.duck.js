// Types
export const productsTypes = {
    FETCH_PRODUCTS: 'products/FETCH_PRODUCTS',
    SAVE_PRODUCTS: 'products/SAVE_PRODUCTS',
    LOADING_PRODUCTS: 'products/LOADING_PRODUCTS',
    PRODUCTS_FETCH_FAILED: 'products/PRODUCTS_FETCH_FAILED'
};

const initialState = {
    products: [],
    loading: false,
    productsFetchError: ''
};

// Reducers
export function productsReducers(state = initialState, action) {
    switch (action.type) {
        case productsTypes.SAVE_PRODUCTS:
            return { ...state, products: action.payload };
        case productsTypes.LOADING_PRODUCTS:
            return { ...state, loading: action.payload };
        case productsTypes.PRODUCTS_FETCH_FAILED:
            return { ...state, productsFetchError: action.payload };
        default:
            return state;
    }
}

// Actions
export const productsActions = {
    fetchProducts: () => ({ type: productsTypes.FETCH_PRODUCTS }), // Controlled by saga
    saveProducts: products => ({ type: productsTypes.SAVE_PRODUCTS, payload: products }),
    loadingProducts: bool => ({ type: types.LOADING_PRODUCTS, payload: bool }),
    productsFetchFailed: message => ({ type: productsTypes.PRODUCTS_FETCH_FAILED, payload: message })
};
