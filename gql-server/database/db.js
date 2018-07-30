const { products } = require('./data');

const db = () => ({
    getProducts: () => products
});

module.exports = db;
