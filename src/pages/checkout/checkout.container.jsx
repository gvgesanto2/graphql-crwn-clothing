import React from 'react';

import CheckoutPage from './checkout.component';
import TotalPriceQuery from '../../queries/total-price/total-price.component';
import CartItemsQuery from '../../queries/cart-items/cart-items.component';

const CheckoutPageContainer = () => {
  return (
    <TotalPriceQuery>
      {
        totalPrice => 
          <CartItemsQuery>
            <CheckoutPage total={totalPrice} />
          </CartItemsQuery>
      }
    </TotalPriceQuery>
  );
}

export default CheckoutPageContainer;



