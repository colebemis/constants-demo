import React from 'react';
import Text from './Text';

const Paragraph = props => (
   <Text is="p" display="block" mt={0} mb={3} {...props} />
);

export default Paragraph;
