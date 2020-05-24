import { gql } from 'apollo-boost';

export const SET_CURRENT_USER = gql`
  mutation setCurrentUser($user: User!) {
    setCurrentUser(user: $user) @client
  }
`;
