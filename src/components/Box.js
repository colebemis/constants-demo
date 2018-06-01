import system from 'system-components';

const Box = system(
   'width',
   'maxWidth',
   'minWidth',
   'height',
   'display',
   'space',
   'color',
   'boxShadow',

   // position
   'top',
   'bottom',
   'left',
   'right',

   // borders
   'borders',
   'borderColor',
   'borderRadius',

   // flexbox
   'flexDirection',
   'alignItems',
   'flexWrap',
   'flexDirection',
   'alignItems',
   'justifyContent',
   'flex',
   'order',
   'alignSelf',
   'justifySelf'
);

Box.displayName = 'Box';

export default Box;
