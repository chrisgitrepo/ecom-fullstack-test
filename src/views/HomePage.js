import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';
import { productsActions } from '../redux/ducks';

import '../stylesheets/listingPage.scss';

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const { products, loading, productsFetchError } = this.props;

        return (
            <main>
                <section className="container">
                    <ul className="productlist">
                        {products.map((product, key) => {
                            return <li key={key} className="listitem">
                                <ProductCard
                                    title={product.title}
                                    description={product.description}
                                    image={product.image}
                                    price={product.price}
                                    currency={product.currency}
                                    priceLabel={product.priceLabel}
                                    productLabel={product.productLabel}
                                    cta={product.cta}
                                    ctaLink={product.ctaLink}
                                />
                            </li>;
                        })}
                    </ul>
                </section>
            </main>
        );
    }
}

HomePage.propTypes = {
    products: PropTypes.array.isRequired,
    loading: PropTypes.bool,
    productsFetchError: PropTypes.string
};

const mapStateToProps = (state) => ({
    products: state.products.products,
    loading: state.products.loading,
    productsFetchError: state.products.productsFetchError
});
const mapDispatchToProps = {
    fetchProducts: productsActions.fetchProducts,
    loadingProducts: productsActions.loadingProducts,
    productsFetchFailed: productsActions.productsFetchFailed
};

export const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);
