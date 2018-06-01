import React from 'react';
import { space, lineHeights } from '../../constants';

export default props => (
   <div>
      <h1>Space</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
         {space.map((value, index) => (
            <div key={value} style={{ marginBottom: space[6] }}>
               <span
                  style={{
                     display: 'inline-block',
                     marginBottom: space[2],
                     lineHeight: lineHeights.tight
                  }}
               >
                  {index} ({value}px)
               </span>
               <div
                  style={{
                     width: value,
                     height: value,
                     background: 'rgba(255, 0, 0, 0.25)'
                  }}
               />
            </div>
         ))}
      </div>
   </div>
);
