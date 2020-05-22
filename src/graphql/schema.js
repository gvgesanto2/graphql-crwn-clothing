import { gql } from 'apollo-boost';

export const typeDefs = gql`
  extend type Item {
    quantity: Int
  }

  extend type Mutation {
    toggleCartHidden: Boolean!
    addCartItem(item: Item!): [Item]!
    clearCartItem(item: Item!): [Item]!
    removeCartItem(item: Item!): [Item]!
  }
`;

export default typeDefs;