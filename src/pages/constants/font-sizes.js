import React from 'react';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Text from '../../components/Text';
import Truncate from '../../components/Truncate';
import { fontSizes } from '../../constants';

export default props => (
   <Box>
      <h1>Font Sizes</h1>
      <Flex flexDirection="column">
         {[...fontSizes].reverse().map((fontSize, index) => (
            <Flex key={fontSize} flexDirection="column" mb={6}>
               <Text>
                  {fontSizes.length - 1 - index} ({fontSize}px)
               </Text>
               <Truncate fontSize={fontSize} lineHeight="tight">
                  Aa The quick brown fox jumps over the lazy dog
               </Truncate>
            </Flex>
         ))}
      </Flex>
   </Box>
);
