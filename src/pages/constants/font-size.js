import { constants } from '@ifixit/toolbox';
import React from 'react';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Heading from '../../components/Heading';
import KeyValueTable from '../../components/KeyValueTable';
import Text from '../../components/Text';
import Truncate from '../../components/Truncate';

const { fontSize } = constants;

export default props => (
   <Box>
      <Heading>Font Size</Heading>

      <Flex flexDirection="column">
         {[...fontSize].reverse().map((value, index) => (
            <Flex key={value} flexDirection="column" mb={5}>
               <Text>
                  {fontSize.length - 1 - index} ({value})
               </Text>
               <Truncate fontSize={value} lineHeight="tight">
                  Aa The quick brown fox jumps over the lazy dog
               </Truncate>
            </Flex>
         ))}
      </Flex>

      <KeyValueTable name="fontSize" data={fontSize} />
   </Box>
);
