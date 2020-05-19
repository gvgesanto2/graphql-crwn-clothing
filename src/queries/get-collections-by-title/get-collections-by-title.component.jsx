import React from 'react';
import { Query } from 'react-apollo';

import { GET_COLLECTIONS_BY_TITLE } from '../../graphql/shop/shop.queries';
import Spinner from '../../components/spinner/spinner.component';

const GetCollectionsByTitleQuery = ({ children, variables: { title }}) => {
  return (
    <Query query={GET_COLLECTIONS_BY_TITLE} variables={{ title }}>
      {
        ({ loading, error, data }) => {
          if(loading) return <Spinner />;
          if(error) return <p>{error.message}</p>;

          const { getCollectionsByTitle } = data;

          if(typeof children === "function") {
            return children(getCollectionsByTitle);
          }
          
          return React.Children.map(children, child =>
            React.cloneElement(child, { getCollectionsByTitle })
          );
        }
      }
    </Query>
  );
}

export default GetCollectionsByTitleQuery;