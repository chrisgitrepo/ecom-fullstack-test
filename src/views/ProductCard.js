import React from 'react';

class ProductCard extends React.Component {

    constructor(props) {
        super(props);
    }

    penceToPounds(pence) {
        return (!pence || typeof pence !== 'number' || pence < 0) ? 0 : (pence / 100).toFixed(2);
    }

    render() {
        const { title, description, image, price, currency, priceLabel, productLabel, cta, ctaLink } = this.props;

        return (
            <section className='productcard'>
                <img className='image' src={`dist${image.path}`} alt={image.alt} />
                {productLabel && <div className='label'>{productLabel}</div>}
                <h1 className='content content-title'>{title}</h1>
                <p className='content content-description'>{description}</p>
                <div className='content content-price'>
                    <p>{priceLabel}</p> <p className='content cost'>{currency}{this.penceToPounds(price)}</p>
                </div>
                <a className='content content-cta' href={ctaLink}>{cta}</a>
            </section>
        );
    }
};

export default ProductCard;