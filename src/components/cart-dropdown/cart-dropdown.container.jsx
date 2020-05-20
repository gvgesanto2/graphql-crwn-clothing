import React from 'react';

import CartItemsQuery from '../../queries/cart-items/cart-items.component';
import CartDropdown from './cart-dropdown.component';
import ToggleCartHiddenMutation from '../../mutations/toggle-cart-hidden/toggle-cart-hidden.component';

const CartDropdownContainer = () => {
  return (
    <ToggleCartHiddenMutation>
      {
        toggleCartHidden => {
          return (
            <CartItemsQuery>
              <CartDropdown toggleCartHidden={toggleCartHidden} />
            </CartItemsQuery>
          );
        }
      }
    </ToggleCartHiddenMutation>
  );
}

export default CartDropdownContainer;