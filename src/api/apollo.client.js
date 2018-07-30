import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const PORT = process.env.PORT || 5000;
const GRAPHQL_ENDPOINT = `http://localhost:${PORT}/graphql`;

const link = new HttpLink({ uri: GRAPHQL_ENDPOINT });

export const apolloClient = new ApolloClient({ link, connectToDevTools: true, cache: new InMemoryCache() });
