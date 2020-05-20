import React from 'react';

import CartIcon from './cart-icon.component';
import ToggleCartHiddenMutation from '../../mutations/toggle-cart-hidden/toggle-cart-hidden.component';
import ItemCountQuery from '../../queries/item-count/item-count.component';

const CartIconContainer = () => {
  return (
    <ItemCountQuery>
      {
        itemCount => {
          return (
          <ToggleCartHiddenMutation>
            <CartIcon itemCount={itemCount} />
          </ToggleCartHiddenMutation>
          );
        }
      }
    </ItemCountQuery>
  );
}

export default CartIconContainer;