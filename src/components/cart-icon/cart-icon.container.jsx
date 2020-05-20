import React from 'react';

import CartIcon from './cart-icon.component';
import ToggleCartHiddenMutation from '../../mutations/toggle-cart-hidden/toggle-cart-hidden.component';

const CartIconContainer = () => {
  return (
    <ToggleCartHiddenMutation>
      <CartIcon />
    </ToggleCartHiddenMutation>
  );
}

export default CartIconContainer;