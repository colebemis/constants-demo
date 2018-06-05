import { constants } from '@ifixit/toolbox';
import React from 'react';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Heading from '../../components/Heading';
import KeyValueTable from '../../components/KeyValueTable';
import Text from '../../components/Text';

const { shadows } = constants;

export default props => (
   <Box>
      <Heading>Shadows</Heading>

      <Flex mx={-2} mb={4}>
         {shadows.map((value, index) => (
            <Flex
               key={value}
               m={2}
               borderRadius={1}
               flex="1 1 auto"
               height={100}
               bg="white"
               alignItems="center"
               justifyContent="center"
               boxShadow={index}
            >
               <Text>{index}</Text>
            </Flex>
         ))}
      </Flex>

      <KeyValueTable name="shadows" data={shadows} />
   </Box>
);
