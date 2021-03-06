import { gql } from 'apollo-boost';


//////////////////////////
// Client-side queries //
////////////////////////

export const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

export const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

export const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

export const GET_TOTAL_PRICE = gql`
  {
    totalPrice @client
  }
`;