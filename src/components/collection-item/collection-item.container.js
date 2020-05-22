import React from 'react';

import AddCartItemMutation from '../../mutations/add-cart-item/add-cart-item.component';
import CollectionItem from './collection-item.component';

const CollectionItemContainer = props => {
  return (
    <AddCartItemMutation>
      {
        addCartItem => {
          return (
            <CollectionItem {...props} addItem={addCartItem} />
          );
        }
      }
    </AddCartItemMutation>
  );
}

export default CollectionItemContainer;