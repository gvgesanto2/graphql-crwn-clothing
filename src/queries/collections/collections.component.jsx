import React from 'react';
import { Query } from 'react-apollo';

import { GET_COLLECTIONS } from '../../graphql/shop/shop.queries';
import Spinner from '../../components/spinner/spinner.component';

const CollectionsQuery = ({ children }) => {
  return (
    <Query query={GET_COLLECTIONS}>
      {
        ({ loading, error, data }) => {
          if(loading) return <Spinner />;
          if(error) return <p>{error.message}</p>;

          const { collections } = data;

          if(typeof children === "function") {
            return children(collections);
          }
          
          return React.Children.map(children, child =>
            React.cloneElement(child, { collections })
          );
        }
      }
    </Query>
  );
}

export default CollectionsQuery;

