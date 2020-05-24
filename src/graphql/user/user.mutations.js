import { gql } from 'apollo-boost';

export const SET_CURRENT_USER = gql`
  mutation setCurrentUser($user: User!) {
    setCurrentUser(user: $user) @client
  }
`;

export const SIGN_IN_WITH_GOOGLE = gql`
  mutation signInWithGoogle {
    signInWithGoogle @client
  }
`;

export const CHECK_USER_SESSION = gql`
  mutation checkUserSession {
    checkUserSession @client
  }
`;


