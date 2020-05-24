import React from 'react';

import App from './App';
import CurrentUserQuery from './queries/current-user/current-user.component';
import CheckUserSessionMutation from './mutations/check-user-session/check-user-session.component';

const AppContainer = () => {
  return (
    <CheckUserSessionMutation>
      {
        checkUserSession => {
          return (
            <CurrentUserQuery>
              <App checkUserSession={checkUserSession} />
            </CurrentUserQuery>
          );
        } 
      }
    </CheckUserSessionMutation>
  );
}

export default AppContainer;
