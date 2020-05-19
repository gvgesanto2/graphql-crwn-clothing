import React from 'react';

import GetCollectionsByTitleQuery from '../../queries/get-collections-by-title/get-collections-by-title.component';
import CollectionPage from './collection.component';

const CollectionPageContainer = ({ match }) => {
  const title = match.params.collectionId;
  return (
    <GetCollectionsByTitleQuery variables={{ title }}>
      {
        getCollectionsByTitle => {
          return <CollectionPage collection={getCollectionsByTitle} />;
        }
      }
    </GetCollectionsByTitleQuery>
  );
}

export default CollectionPageContainer;