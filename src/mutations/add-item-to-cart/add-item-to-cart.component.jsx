import React from 'react';
import { Mutation } from 'react-apollo';

import { ADD_ITEM_TO_CART } from '../../graphql/cart/cart.mutations';

const AddItemToCartMutation = ({ children }) => {
  return (
    <Mutation mutation={ADD_ITEM_TO_CART}>
      {
        addItemToCart => {
          const newAddItemToCart = item => addItemToCart({ variables: { item }});
          if(typeof children === "function") {
            return children(newAddItemToCart)
          }

          return React.Children.map(children, child =>
            React.cloneElement(child, { addItemToCart: newAddItemToCart })
          );
        }
      }
    </Mutation>
  );
}

export default AddItemToCartMutation;