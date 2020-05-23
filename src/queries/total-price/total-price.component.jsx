import React from 'react';
import { Query } from 'react-apollo';

import { GET_TOTAL_PRICE } from '../../graphql/cart/cart.queries';
import Spinner from '../../components/spinner/spinner.component';

const TotalPriceQuery = ({ children }) => {
  return (
    <Query query={GET_TOTAL_PRICE}>
      {
        ({ loading, error, data }) => {
          if(loading) return <Spinner />;
          if(error) return <p>{error.message}</p>;

          const { totalPrice } = data;

          if(typeof children === "function") {
            return children(totalPrice);
          }

          return React.Children.map(children, child =>
            React.cloneElement(child, { totalPrice })
          );
        }
      }
    </Query>
  );
}

export default TotalPriceQuery;