import { gql } from 'apollo-boost';

//////////////////////////
// Client-side queries //
////////////////////////

export const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;