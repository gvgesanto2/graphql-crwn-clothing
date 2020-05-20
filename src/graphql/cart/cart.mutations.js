import { gql } from 'apollo-boost';

export const TOGGLE_CART_HIDDEN = gql`
  mutation toggleCartHidden {
    toggleCartHidden @client
  }
`;