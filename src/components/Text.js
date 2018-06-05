import system from 'system-components';

const Text = system(
   {
      is: 'span',
      display: 'inline-block',
      fontSize: 2,
      fontWeight: 'normal',
      lineHeight: 'copy',
      color: 'grayAlpha.9',
   },
   'space',
   'width',
   'textAlign',
   'letterSpacing',
);

Text.displayName = 'Text';

export default Text;
