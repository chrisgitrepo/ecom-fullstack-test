const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const {
    graphqlExpress,
    graphiqlExpress
} = require('apollo-server-express');
const app = require('express')();

app.use(cors({credentials: true, origin: true}));

const schema = require('./schema');

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Express GraphQL Server Now Running On localhost:${PORT}/graphql`));
