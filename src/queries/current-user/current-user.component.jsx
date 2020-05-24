import React from 'react';
import { Query } from 'react-apollo';

import { GET_CURRENT_USER } from '../../graphql/user/user.queries';
import Spinner from '../../components/spinner/spinner.component';

const CurrentUserQuery = ({ children }) => {
  return (
    <Query query={GET_CURRENT_USER}>
      {
        ({ loading, error, data }) => {
          if(loading) return <Spinner />;
          if(error) return <p>{error.message}</p>;

          const { currentUser } = data;

          if(typeof children === "function") {
            return children(currentUser);
          }

          return React.Children.map(children, child =>
            React.cloneElement(child, { currentUser })
          );
        }
      }
    </Query>
  );
}

export default CurrentUserQuery;