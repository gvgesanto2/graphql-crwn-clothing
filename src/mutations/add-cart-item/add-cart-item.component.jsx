import React from 'react';
import { Mutation } from 'react-apollo';

import { ADD_ITEM_TO_CART } from '../../graphql/cart/cart.mutations';

const AddCartItemMutation = ({ children }) => {
  return (
    <Mutation mutation={ADD_ITEM_TO_CART}>
      {
        addCartItem => {
          const newAddCartItem = item => addCartItem({ variables: { item }});
          if(typeof children === "function") {
            return children(newAddCartItem)
          }

          return React.Children.map(children, child =>
            React.cloneElement(child, { addCartItem: newAddCartItem })
          );
        }
      }
    </Mutation>
  );
}

export default AddCartItemMutation;