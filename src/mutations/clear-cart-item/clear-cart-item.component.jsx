import React from 'react';
import { Mutation } from 'react-apollo';

import { CLEAR_ITEM_FROM_CART } from '../../graphql/cart/cart.mutations';

const ClearCartItemMutation = ({ children }) => {
  return (
    <Mutation mutation={CLEAR_ITEM_FROM_CART}>
      {
        clearCartItem => {
          const newClearCartItem = item => clearCartItem({ variables: { item }});
          if(typeof children === "function") {
            return children(newClearCartItem)
          }

          return React.Children.map(children, child =>
            React.cloneElement(child, { clearCartItem: newClearCartItem })
          );
        }
      }
    </Mutation>
  );
}

export default ClearCartItemMutation;