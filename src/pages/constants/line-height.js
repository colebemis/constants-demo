import { constants } from '@ifixit/toolbox';
import React from 'react';
import Box from '../../components/Box';
import Heading from '../../components/Heading';
import KeyValueTable from '../../components/KeyValueTable';

const { lineHeight } = constants;

export default props => (
   <Box>
      <Heading>Line Height</Heading>

      <KeyValueTable name="lineHeight" data={lineHeight} />
   </Box>
);
