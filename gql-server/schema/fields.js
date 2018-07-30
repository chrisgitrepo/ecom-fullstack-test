const {
    GraphQLString,
    GraphQLList,
    GraphQLFloat,
    GraphQLObjectType
} = require('graphql');

const productFields = {
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    image: {
        type: new GraphQLObjectType({
            name: 'Image',
            fields: {
                path: { type: GraphQLString },
                alt: { type: GraphQLString }
            }
        })
    },
    price: { type: GraphQLFloat },
    currency: { type: GraphQLString },
    priceLabel: { type: GraphQLString },
    productLabel: { type: GraphQLString },
    cta: { type: GraphQLString },
    ctaLink: { type: GraphQLString }
};

module.exports = { productFields };
