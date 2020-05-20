import { 
  GET_CART_HIDDEN, 
  GET_CART_ITEMS, 
  GET_ITEM_COUNT 
} from './cart.queries';

import { addItemToCart, getCartItemCount } from './cart.utils';

const resolve = (cache, query, dataKey, resolverFunction, args) => {
  const data = cache.readQuery({ query });
  let newData;

  if(args) {
    newData = resolverFunction(data[dataKey], ...args);
  } else {
    newData = resolverFunction(data[dataKey]);
  }

  cache.writeQuery({
    query,
    data: { [dataKey]: newData }
  });

  return newData;
}

const cartResolvers = {
  Mutation: {
    toggleCartHidden: (_root, _args, { cache }) => {
      const newCartHidden = resolve(
        cache, 
        GET_CART_HIDDEN,
        "cartHidden",
        cartHidden => !cartHidden
      );

      return newCartHidden;
    },
    addItemToCart: (_root, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS
      });

      const newCartItems = addItemToCart(cartItems, item);

      cache.writeQuery({
        query: GET_ITEM_COUNT,
        data: { itemCount: getCartItemCount(newCartItems) }
      });

      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: { cartItems: newCartItems }
      });

      return newCartItems;
    }
  }
};

export default cartResolvers;