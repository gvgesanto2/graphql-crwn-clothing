import React from 'react';
import { Mutation } from 'react-apollo';

import { SET_CURRENT_USER } from '../../graphql/user/user.mutations';

const SetCurrentUserMutation = ({ children }) => {
  return (
    <Mutation mutation={SET_CURRENT_USER}>
      {
        setCurrentUser => {
          const newSetCurrentUser = user => setCurrentUser({ variables: { user }});
          if(typeof children === "function") {
            return children(newSetCurrentUser)
          }

          return React.Children.map(children, child =>
            React.cloneElement(child, { setCurrentUser: newSetCurrentUser })
          );
        }
      }
    </Mutation>
  );
}

export default SetCurrentUserMutation;