import { constants } from '@ifixit/toolbox';
import React from 'react';
import Box from '../../components/Box';
import Heading from '../../components/Heading';
import KeyValueTable from '../../components/KeyValueTable';
import Usage from '../../components/Usage';

const { borderRadius } = constants;

export default () => (
   <Box>
      <Heading mt="0">Border Radius</Heading>
      <Usage name="borderRadius" />
      <KeyValueTable name="borderRadius" data={borderRadius} />
   </Box>
);
