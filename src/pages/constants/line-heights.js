import React from 'react';
import Box from '../../components/Box';
import Code from '../../components/Code';
import Heading from '../../components/Heading';
import Table, { Cell, Header, Row } from '../../components/Table';
import { lineHeights } from '../../theme';

export default props => (
   <Box>
      <Heading>Line Weights</Heading>

      <Table>
         <Header>
            <Row>
               <Cell is="th">Key</Cell>
               <Cell is="th">Value</Cell>
            </Row>
         </Header>
         <tbody>
            {Object.entries(lineHeights).map(([key, value]) => (
               <Row key={key}>
                  <Cell>
                     <Code>lineHeights.{key}</Code>
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
