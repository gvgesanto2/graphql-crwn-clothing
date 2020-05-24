import React from 'react';

import Header from './header.component';
import CartHiddenQuery from '../../queries/cart-hidden/cart-hidden.component';
import CurrentUserQuery from '../../queries/current-user/current-user.component';

const HeaderContainer = () => {
  return (
    <CartHiddenQuery>
      {
        cartHidden => {
          return (
            <CurrentUserQuery>
              <Header hidden={cartHidden} />
            </CurrentUserQuery>
          );
        }
      }
    </CartHiddenQuery>
  );
}

export default HeaderContainer;