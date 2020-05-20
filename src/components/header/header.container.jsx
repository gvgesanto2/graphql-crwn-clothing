import React from 'react';

import Header from './header.component';
import CartHiddenQuery from '../../queries/cart-hidden/cart-hidden.component';

const HeaderContainer = () => {
  return (
    <CartHiddenQuery>
      {
        cartHidden => {
          return <Header hidden={cartHidden} />;
        }
      }
    </CartHiddenQuery>
  );
}

export default HeaderContainer;