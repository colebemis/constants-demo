import React from 'react';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Text from '../../components/Text';
import { space } from '../../constants';

export default props => (
   <Box>
      <h1>Space</h1>
      <Flex flexDirection="column">
         {space.map((value, index) => (
            <Box key={value} mb={6}>
               <Text mb={2}>
                  {index} ({value}px)
               </Text>
               <Box width={value} height={value} bg="blue.2" />
            </Box>
         ))}
      </Flex>
   </Box>
);
