import React from 'react';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

export default () => (
   <div>
      <Heading>Introduction</Heading>
      <Paragraph>
         Style constants are the foundation of our design system. Essentially,
         they’re name and value pairs representing the design properties we want
         to manage. With the values for all style constants stored in a single
         place, it’s easier to achieve consistency while reducing the burden of
         managing our design system. We use style constants in place of
         hard-coded values (such as hex values for color, or pixel values for
         spacing) in order to maintain a scalable and consistent visual system
         for UI development.
      </Paragraph>
   </div>
);
