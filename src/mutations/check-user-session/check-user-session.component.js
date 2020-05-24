import React from 'react';
import { Mutation } from 'react-apollo';

import { CHECK_USER_SESSION } from '../../graphql/user/user.mutations';

const CheckUserSessionMutation = ({ children }) => {
  return (
    <Mutation mutation={CHECK_USER_SESSION}>
      {
        checkUserSession => {
          if(typeof children === "function") {
            return children(checkUserSession);
          }

          return React.Children.map(children, child =>
            React.cloneElement(child, { checkUserSession })
          );
        }
      }
    </Mutation>
  );
}

export default CheckUserSessionMutation;