import { constants } from '@ifixit/toolbox';
import React from 'react';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Heading from '../../components/Heading';
import KeyValueTable from '../../components/KeyValueTable';
import Text from '../../components/Text';

const { spacing } = constants;

export default props => (
   <Box>
      <Heading mt="0">Spacing</Heading>

      <Flex flexDirection="column">
         {spacing.map((value, index) => (
            <Box key={value} mb={5}>
               <Text mb={1}>
                  {index} ({value})
               </Text>
               <Box width={value} height={value} bg="blue.2" />
            </Box>
         ))}
      </Flex>

      <KeyValueTable name="spacing" data={spacing} />
   </Box>
);
