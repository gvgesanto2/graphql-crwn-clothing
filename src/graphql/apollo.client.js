import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

import typeDefs from './schema';
import rootResolver from './root-resolver';
import INITIAL_STATE from './initial-data';

const httpLink = createHttpLink({
  uri: "https://crwn-clothing.com"
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs
});

client.setResolvers(rootResolver);

client.writeData({
  data: INITIAL_STATE
});

export default client;
