import React from 'react';
import { Query } from 'react-apollo';

import { GET_CART_HIDDEN } from '../../graphql/cart/cart.queries';
import Spinner from '../../components/spinner/spinner.component';

const CartHiddenQuery = ({ children }) => {
  return (
    <Query query={GET_CART_HIDDEN}>
      {
        ({ loading, error, data }) => {
          if(loading) return <Spinner />;
          if(error) return <p>{error.message}</p>;

          const { cartHidden } = data;

          if(typeof children === "function") {
            return children(cartHidden);
          }

          return React.Children.map(children, child =>
            React.cloneElement(child, { cartHidden })
          );
        }
      }
    </Query>
  );
}

export default CartHiddenQuery;