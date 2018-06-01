import React from 'react';
import { fontSizes, space, lineHeights } from '../../constants';

export default props => (
   <div>
      <h1>Font Sizes</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
         {[...fontSizes].reverse().map((fontSize, index) => (
            <div key={fontSize} style={{ marginBottom: space[6] }}>
               <span
                  style={{
                     display: 'block',
                     marginBottom: space[2],
                     lineHeight: lineHeights.tight
                  }}
               >
                  {fontSizes.length - 1 - index} ({fontSize}px)
               </span>
               <span
                  style={{
                     display: 'block',
                     fontSize,
                     lineHeight: lineHeights.tight,
                     whiteSpace: 'nowrap',
                     overflow: 'hidden',
                     textOverflow: 'ellipsis'
                  }}
               >
                  Aa The quick brown fox jumps over the lazy dog
               </span>
            </div>
         ))}
      </div>
   </div>
);
