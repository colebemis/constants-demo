import React from 'react';
import Subheading from './Subheading';
import Pre from './Pre';
import Code from './Code';
import Paragraph from './Paragraph';

const code = name =>
   `
import { constants } from '@ifixit/toolbox';

const { ${name} } = constants;
`.trim();

const Usage = ({ heading, name }) => (
   <div>
      <Subheading>{heading}</Subheading>
      <Pre>
         <Code>{code(name)}</Code>
      </Pre>
      <Paragraph>
         See reference table for the available properties on <Code>{name}</Code>.
      </Paragraph>
   </div>
);

Usage.defaultProps = {
   heading: 'Usage',
};

export default Usage;
