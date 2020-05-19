import React from 'react';

import CollectionsQuery from '../../queries/collections/collections.component';
import CollectionsOverview from './collections-overview.component';

const CollectionsOverviewContainer = () => {
  return (
    <CollectionsQuery>
      <CollectionsOverview />
    </CollectionsQuery>
  );
}

export default CollectionsOverviewContainer;