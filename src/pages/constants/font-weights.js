import React from 'react';
import Box from '../../components/Box';
import Code from '../../components/Code';
import Heading from '../../components/Heading';
import Table, { Cell, Header, Row } from '../../components/Table';
import { fontWeights } from '../../constants';

export default props => (
   <Box>
      <Heading>Font Weights</Heading>

      <Table>
         <Header>
            <Row>
               <Cell is="th">Key</Cell>
               <Cell is="th">Value</Cell>
            </Row>
         </Header>
         <tbody>
            {Object.entries(fontWeights).map(([key, value]) => (
               <Row key={key}>
                  <Cell>
                     <Code>fontWeights.{key}</Code>
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
