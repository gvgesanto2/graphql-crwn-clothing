import React from 'react';
import { Query } from 'react-apollo';

import { GET_ITEM_COUNT } from '../../graphql/cart/cart.queries';
import Spinner from '../../components/spinner/spinner.component';

const ItemCountQuery = ({ children }) => {
  return (
    <Query query={GET_ITEM_COUNT}>
      {
        ({ loading, error, data }) => {
          if(loading) return <Spinner />;
          if(error) return <p>{error.message}</p>;

          const { itemCount } = data;

          if(typeof children === "function") {
            return children(itemCount);
          }

          return React.Children.map(children, child =>
            React.cloneElement(child, { itemCount })  
          );
        }
      }
    </Query>
  );
}

export default ItemCountQuery;