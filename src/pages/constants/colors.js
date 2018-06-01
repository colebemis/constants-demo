import React from 'react';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Text from '../../components/Text';
import { colors } from '../../constants';

const Color = ({ name, value }) => (
   <Flex alignItems="center" mb={1}>
      <div
         style={{
            width: 128,
            height: 64,
            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z' fill='%23ddd' fill-opacity='.4'/%3E%3C/svg%3E")`,
            overflow: 'hidden'
         }}
      >
         <Box width="100%" height="100%" bg={value} />
      </div>
      <Flex flexDirection="column" ml={4}>
         <Text>{name}</Text>
         <Text color="grayAlpha.6">{value}</Text>
      </Flex>
   </Flex>
);

export default props => (
   <Box>
      <h1>Colors</h1>
      <Flex flexWrap="wrap">
         {Object.entries(colors).map(([name, value]) => (
            <Box key={name} width="50%" mb={6}>
               {typeof value === 'string' ? (
                  <Color name={name} value={value} />
               ) : (
                  value.map((color, index) => (
                     <Color
                        key={color}
                        name={`${name} ${index}`}
                        value={color}
                     />
                  ))
               )}
            </Box>
         ))}
      </Flex>
   </Box>
);
