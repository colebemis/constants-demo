import { constants } from '@ifixit/toolbox';
import React from 'react';
import Box from '../../components/Box';
import Heading from '../../components/Heading';
import KeyValueTable from '../../components/KeyValueTable';
import Paragraph from '../../components/Paragraph';

const { lineHeight } = constants;

export default props => (
   <Box>
      <Heading mt="0">Line Height</Heading>

      {Object.entries(lineHeight).map(([key, value]) => (
         <Paragraph lineHeight={value}>
            {key} ({value}) Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet.
         </Paragraph>
      ))}

      <KeyValueTable name="lineHeight" data={lineHeight} />
   </Box>
);
