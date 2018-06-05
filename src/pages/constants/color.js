import { constants } from '@ifixit/toolbox';
import React from 'react';
import Box from '../../components/Box';
import Code from '../../components/Code';
import Flex from '../../components/Flex';
import Heading from '../../components/Heading';
import Table, { Cell, Header, Row } from '../../components/Table';
import Text from '../../components/Text';

const { color } = constants;

const Color = ({ name, value }) => (
   <Flex alignItems="center" mb={1}>
      <div
         style={{
            width: 128,
            height: 64,
            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z' fill='%23ddd' fill-opacity='.4'/%3E%3C/svg%3E")`,
            overflow: 'hidden',
         }}
      >
         <Box width="100%" height="100%" bg={value} />
      </div>
      <Flex flexDirection="column" ml={4}>
         <Text>{name}</Text>
         <Text fontSize={1} color="grayAlpha.6">
            {value}
         </Text>
      </Flex>
   </Flex>
);

export default props => (
   <Box>
      <Heading>Color</Heading>

      <Flex flexWrap="wrap">
         {Object.entries(color).map(([name, value]) => (
            <Box key={name} width="50%" mb={6}>
               {typeof value === 'string' ? (
                  <Color name={name} value={value} />
               ) : (
                  value.map((colorValue, index) => (
                     <Color
                        key={colorValue}
                        name={`${name} ${index}`}
                        value={colorValue}
                     />
                  ))
               )}
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
            {Object.entries(color).map(
               ([name, value]) =>
                  typeof value === 'string' ? (
                     <Row>
                        <Cell>
                           <Code>color.{name}</Code>
                        </Cell>
                        <Cell>
                           <Code>{value}</Code>
                        </Cell>
                     </Row>
                  ) : (
                     value.map((colorValue, index) => (
                        <Row key={colorValue}>
                           <Cell>
                              <Code>
                                 color.{name}[{index}]
                              </Code>
                           </Cell>
                           <Cell>
                              <Code>{colorValue}</Code>
                           </Cell>
                        </Row>
                     ))
                  ),
            )}
         </tbody>
      </Table>
   </Box>
);
