import React from 'react';
import { Query } from 'react-apollo';

import { GET_CART_ITEMS } from '../../graphql/cart/cart.queries';
import Spinner from '../../components/spinner/spinner.component';


const CartItemsQuery = ({ children }) => {
  return (
    <Query query={GET_CART_ITEMS}>
      {
        ({ loading, error, data }) => {
          if(loading) return <Spinner />;
          if(error) return <p>{error.message}</p>;

          const { cartItems } = data;

          if(typeof children === "function") {
            return children(cartItems);
          }

          return React.Children.map(children, child =>
            React.cloneElement(child, { cartItems })
          );
        }
      }
    </Query>
  );
}

export default CartItemsQuery;
