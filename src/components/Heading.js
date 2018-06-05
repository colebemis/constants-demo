import system from 'system-components';

const Heading = system(
   {
      is: 'h1',
      mx: 0,
      mt: 5,
      mb: 4,
      fontSize: 6,
      fontWeight: 'bold',
      lineHeight: 'title',
      color: 'grayAlpha.9',
   },
   'width',
   'textAlign',
   'letterSpacing',
);

Heading.displayName = 'Heading';

export default Heading;
