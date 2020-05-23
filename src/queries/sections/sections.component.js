import React from 'react';
import { Query } from 'react-apollo';

import { GET_SECTIONS } from '../../graphql/directory/directory.queries';
import Spinner from '../../components/spinner/spinner.component';

const SectionsQuery = ({ children }) => {
  return (
    <Query query={GET_SECTIONS}>
      {
        ({ loading, error, data }) => {
          if(loading) return <Spinner />;
          if(error) return <p>{error.message}</p>;

          const { sections } = data;

          if(typeof children === "function") {
            return children(sections);
          }

          return React.Children.map(children, child =>
            React.cloneElement(child, { sections })
          );
        }
      }
    </Query>
  );
}

export default SectionsQuery;