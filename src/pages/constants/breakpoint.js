import { constants } from '@ifixit/toolbox';
import React from 'react';
import Box from '../../components/Box';
import Heading from '../../components/Heading';
import KeyValueTable from '../../components/KeyValueTable';
import Usage from '../../components/Usage';

const { breakpoint } = constants;

export default () => (
   <Box>
      <Heading mt="0">Breakpoint</Heading>
      <Usage name="breakpoint" />
      <KeyValueTable name="breakpoint" data={breakpoint} />
   </Box>
);
