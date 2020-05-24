import React from 'react';

import App from './App';
import SetCurrentUserMutation from './mutations/set-current-user/set-current-user.component';
import CurrentUserQuery from './queries/current-user/current-user.component';

const AppContainer = () => {
  return (
    <SetCurrentUserMutation>
      {
        setCurrentUser => {
          return (
            <CurrentUserQuery>
              <App setCurrentUser={setCurrentUser} />
            </CurrentUserQuery>
          );
        } 
      }
    </SetCurrentUserMutation>
  );
}

export default AppContainer;
