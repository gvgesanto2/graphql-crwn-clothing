import cartResolvers from './cart/cart.resolvers';
import directoryResolvers from './directory/directory.resolvers';

const rootResolver = [
  cartResolvers,
  directoryResolvers
];

export default rootResolver;