import { gql } from 'apollo-boost';

export const typeDefs = gql`
  extend type Item {
    quantity: Int
  }

  extend type Mutation {
    toggleCartHidden: Boolean!
    addItemToCart(item: Item!): [Item]!
  }
`;

export default typeDefs;