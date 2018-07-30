// Import type helpers from graphql-js
const {
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema
} = require('graphql');

const { productFields } = require('./fields');
const db = require('../database/db');

const productType = new GraphQLObjectType({ name: 'Products', fields: productFields });

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',

    fields: () => ({
        products: {
            type: new GraphQLList(productType),
            description: 'The Products list',
            resolve: (obj, args) => db().getProducts()
        }
    })
});

const schema = new GraphQLSchema({
    query: RootQuery
});

module.exports = schema;
