import React from 'react';
import { Mutation } from 'react-apollo';

import { TOGGLE_CART_HIDDEN } from '../../graphql/cart/cart.mutations';

const ToggleCartHiddenMutation = ({ children }) => {
  return (
    <Mutation mutation={TOGGLE_CART_HIDDEN}>
      {
        toggleCartHidden => {
          if(typeof children === "function") {
            return children(toggleCartHidden);
          }

          return React.Children.map(children, child =>
            React.cloneElement(child, { toggleCartHidden })
          );
        }
      }
    </Mutation>
  );
}

export default ToggleCartHiddenMutation;