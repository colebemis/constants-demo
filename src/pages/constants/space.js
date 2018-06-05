import React from 'react';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Text from '../../components/Text';
import { space } from '../../theme';
import Heading from '../../components/Heading';
import Table, { Cell, Header, Row } from '../../components/Table';
import Code from '../../components/Code';

export default props => (
   <Box>
      <Heading>Space</Heading>
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

      <Table>
         <Header>
            <Row>
               <Cell is="th">Key</Cell>
               <Cell is="th">Value</Cell>
            </Row>
         </Header>
         <tbody>
            {space.map((value, index) => (
               <Row key={value}>
                  <Cell>
                     <Code>space[{index}]</Code>
                  </Cell>
                  <Cell>
                     <Code>{value}</Code>
                  </Cell>
               </Row>
            ))}
         </tbody>
      </Table>
   </Box>
);
