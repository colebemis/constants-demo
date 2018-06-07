import system from 'system-components';

const Pre = system(
   {
      is: 'pre',
      mb: 3,
      p: 3,
      bg: 'grayAlpha.1',
   },
   {
      '> code': {
         fontSize: '100%',
      },
   },
);

Pre.displayName = 'Pre';

export default Pre;
