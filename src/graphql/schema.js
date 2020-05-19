import { gql } from 'apollo-boost';

export const typeDefs = gql`
  extend type Mutation {
    toggleCartHidden: Boolean!
  }
`;

export default typeDefs;