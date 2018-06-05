import system from 'system-components';
import { lineHeights } from '../theme';

const Code = system({
   is: 'code',
   font: 'Menlo, monospace',
   fontSize: 1,
   lineHeight: 'copy',
   color: 'grayAlpha.9',
});

Code.displayName = 'Code';

export default Code;
