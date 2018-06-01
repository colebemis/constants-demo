import React from 'react';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Text from '../../components/Text';
import Truncate from '../../components/Truncate';
import Heading from '../../components/Heading';
import { fontSizes } from '../../constants';
import Table, { Cell, Header, Row } from '../../components/Table';

export default props => (
   <Box>
      <Heading>Font Sizes</Heading>

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

      <Table>
         <Header>
            <Row>
               <Cell is="th">Key</Cell>
               <Cell is="th">Value</Cell>
            </Row>
         </Header>
         <tbody>
            {[...fontSizes].reverse().map((fontSize, index) => (
               <Row key={fontSize}>
                  <Cell>fontSizes[{fontSizes.length - 1 - index}]</Cell>
                  <Cell>{fontSize}</Cell>
               </Row>
            ))}
         </tbody>
      </Table>
   </Box>
);
