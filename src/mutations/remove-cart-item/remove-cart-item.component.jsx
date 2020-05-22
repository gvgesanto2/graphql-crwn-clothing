import React from 'react';
import { Mutation } from 'react-apollo';

import { REMOVE_ITEM_FROM_CART } from '../../graphql/cart/cart.mutations';

const RemoveCartItemMutation = ({ children }) => {
  return (
    <Mutation mutation={REMOVE_ITEM_FROM_CART}>
      {
        removeCartItem => {
          const newRemoveCartItem = item => removeCartItem({ variables: { item }});
          if(typeof children === "function") {
            return children(newRemoveCartItem)
          }

          return React.Children.map(children, child =>
            React.cloneElement(child, { removeCartItem: newRemoveCartItem })
          );
        }
      }
    </Mutation>
  );
}

export default RemoveCartItemMutation;