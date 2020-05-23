import React from 'react';

import CheckoutItem from './checkout-item.component';
import AddCartItemMutation from '../../mutations/add-cart-item/add-cart-item.component';
import ClearCartItemMutation from '../../mutations/clear-cart-item/clear-cart-item.component';
import RemoveCartItemMutation from '../../mutations/remove-cart-item/remove-cart-item.component';

const CheckoutItemContainer = ({ cartItem }) => {
  return (
    <AddCartItemMutation>
      {
        addCartItem =>
          <ClearCartItemMutation>
            {
              clearCartItem => 
                <RemoveCartItemMutation>
                  {
                    removeCartItem => {
                      return (
                        <CheckoutItem 
                          cartItem={cartItem}
                          addItem={addCartItem}
                          clearItem={clearCartItem}
                          removeItem={removeCartItem}
                        />
                      );
                    }
                  }
                </RemoveCartItemMutation>
            }
          </ClearCartItemMutation>
      }
    </AddCartItemMutation>
  );
}

export default CheckoutItemContainer;
