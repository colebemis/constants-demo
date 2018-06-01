import React from 'react';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Text from '../../components/Text';
import { shadows } from '../../constants';
import Heading from '../../components/Heading';
import Table, { Cell, Header, Row } from '../../components/Table';
import Code from '../../components/Code';

export default props => (
   <Box>
      <Heading>Shadows</Heading>
      <Flex mb={6}>
         {shadows.map((value, index) => (
            <Flex
               key={value}
               m={3}
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

      <Table>
         <Header>
            <Row>
               <Cell is="th">Key</Cell>
               <Cell is="th">Value</Cell>
            </Row>
         </Header>
         <tbody>
            {shadows.map((value, index) => (
               <Row key={value}>
                  <Cell>
                     <Code>shadows[{index}]</Code>
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
