import React from 'react';

import AddItemToCartMutation from '../../mutations/add-item-to-cart/add-item-to-cart.component';
import CollectionItem from './collection-item.component';

const CollectionItemContainer = props => {
  return (
    <AddItemToCartMutation>
      {
        addItemToCart => {
          return (
            <CollectionItem {...props} addItem={addItemToCart} />
          );
        }
      }
    </AddItemToCartMutation>
  );
}

export default CollectionItemContainer;