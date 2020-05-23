import React from 'react';

import Directory from './directory.component';
import SectionsQuery from '../../queries/sections/sections.component';

const DirectoryContainer = () => {
  return (
    <SectionsQuery>
      <Directory />
    </SectionsQuery>
  );
}

export default DirectoryContainer;

