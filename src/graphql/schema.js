import { gql } from 'apollo-boost';

export const typeDefs = gql`
  extend type Item {
    quantity: Int
  }

  extend type Section {
    id: Int!
    title: String!
    imageUrl: String!
    linkUrl: String!
    size: String
  }

  extend type Query {
    sections: [Section]!
  }

  extend type Mutation {
    toggleCartHidden: Boolean!
    addCartItem(item: Item!): [Item]!
    clearCartItem(item: Item!): [Item]!
    removeCartItem(item: Item!): [Item]!
  }
`;

export default typeDefs;