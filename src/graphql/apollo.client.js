import React from 'react';
import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { persistCache } from 'apollo-cache-persist';

import typeDefs from './schema';
import rootResolver from './root-resolver';
import INITIAL_STATE from './initial-data';
import Spinner from '../components/spinner/spinner.component';
import { ApolloProvider } from 'react-apollo';


class ApolloClientProvider extends React.Component {
  state = {
    client: null,
    loaded: false
  };

  async componentDidMount() {
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

    try {
      await persistCache({
        cache,
        storage: window.localStorage
      });
    } catch (err) {
      console.error('Error restoring Apollo cache', err);
    }
    
    this.setState({
      client,
      loaded: true,
    });
  }

  render() {
    const { client, loaded } = this.state;
    const { children } = this.props;
    if (!loaded) return <Spinner />;

    return (
      <ApolloProvider client={client}>
        {
          children
        }
      </ApolloProvider>
    );
  }
}


export default ApolloClientProvider;
