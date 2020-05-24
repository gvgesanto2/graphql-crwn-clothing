import React from 'react';
import { Mutation } from 'react-apollo';

import { SIGN_IN_WITH_GOOGLE } from '../../graphql/user/user.mutations';

const SignInWithGoogleMutation = ({ children }) => {
  return (
    <Mutation mutation={SIGN_IN_WITH_GOOGLE}>
      {
        signInWithGoogle => {
          if(typeof children === "function") {
            return children(signInWithGoogle);
          }

          return React.Children.map(children, child =>
            React.cloneElement(child, { signInWithGoogle })
          );
        }
      }
    </Mutation>
  );
}

export default SignInWithGoogleMutation;