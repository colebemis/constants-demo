import { constants } from '@ifixit/toolbox';
import React from 'react';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Heading from '../../components/Heading';
import KeyValueTable from '../../components/KeyValueTable';
import Text from '../../components/Text';
import Usage from '../../components/Usage';

const { color } = constants;

const Color = ({ name, value }) => (
   <Flex alignItems="center" mb={0}>
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
      <Flex flexDirection="column" ml={3}>
         <Text>{name}</Text>
         <Text fontSize={1} color="grayAlpha.6">
            {value}
         </Text>
      </Flex>
   </Flex>
);

export default props => (
   <Box>
      <Heading mt="0">Color</Heading>
      <Flex flexWrap="wrap" mb={-5}>
         {Object.entries(color).map(([name, value]) => (
            <Box key={name} width={['100%', null, '50%']} mb={5}>
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
      <Usage name="color" />
      <KeyValueTable name="color" data={color} />
   </Box>
);
