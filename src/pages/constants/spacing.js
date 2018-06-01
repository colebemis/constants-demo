import React from 'react';
import { spacing, lineHeights } from '../../constants';

export default props => (
   <div>
      <h1>Spacing</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
         {spacing.map((space, index) => (
            <div key={space} style={{ marginBottom: spacing[6] }}>
               <span
                  style={{
                     display: 'inline-block',
                     marginBottom: spacing[2],
                     lineHeight: lineHeights.tight
                  }}
               >
                  {index} ({space}px)
               </span>
               <div
                  style={{
                     width: space,
                     height: space,
                     background: 'rgba(255, 0, 0, 0.25)'
                  }}
               />
            </div>
         ))}
      </div>
   </div>
);
