import React from 'react';
import { colors, space, radii, lineHeights } from '../../constants';

const Color = ({ name, value }) => (
   <div
      style={{
         display: 'flex',
         alignItems: 'center',
         marginBottom: space[1]
      }}
   >
      <div
         style={{
            width: 128,
            height: 64,
            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z' fill='%23ddd' fill-opacity='.4'/%3E%3C/svg%3E")`,
            overflow: 'hidden'
         }}
      >
         <div
            style={{ width: '100%', height: '100%', backgroundColor: value }}
         />
      </div>
      <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: space[4],
            lineHeight: lineHeights.normal
         }}
      >
         <span>{name}</span>
         <span style={{ color: colors.grayAlpha[6] }}>{value}</span>
      </div>
   </div>
);

export default props => (
   <div>
      <h1>Colors</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
         {Object.entries(colors).map(([name, value]) => (
            <div key={name} style={{ width: '50%', marginBottom: space[6] }}>
               {typeof value === 'string' ? (
                  <Color name={name} value={value} />
               ) : (
                  value.map((color, index) => (
                     <Color
                        key={color}
                        name={`${name} ${index}`}
                        value={color}
                     />
                  ))
               )}
            </div>
         ))}
      </div>
   </div>
);
