import { constants } from '@ifixit/toolbox';
import React from 'react';
import Box from '../../components/Box';
import Heading from '../../components/Heading';
import KeyValueTable from '../../components/KeyValueTable';
import Usage from '../../components/Usage';

const { transition } = constants;

export default () => (
   <Box>
      <Heading mt="0">Transition</Heading>
      <Usage name="transition" />
      <KeyValueTable name="transition" data={transition} />
   </Box>
);
