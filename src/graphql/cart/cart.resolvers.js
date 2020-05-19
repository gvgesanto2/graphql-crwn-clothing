import { GET_CART_HIDDEN } from './cart.queries';

const cartResolvers = {
  Mutation: {
    toggleCartHidden: (_root, _args, { cache }) => {
      const { cartHidden } = cache.readQuery({
        query: GET_CART_HIDDEN
      });

      const newCartHidden = !cartHidden;

      cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: { cartHidden: newCartHidden }
      });

      return newCartHidden;
    }
  }
};

export default cartResolvers;