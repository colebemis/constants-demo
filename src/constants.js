export const colors = {
   blue: [
      '#EBF4FB',
      '#D6E8F7',
      '#ADD2EF',
      '#5CA4E0',
      '#0071CE',
      '#005091',
      '#00325C'
   ],
   green: [
      '#F2F9ED',
      '#E4F3DC',
      '#C9E7B9',
      '#93D073',
      '#57B524',
      '#35820F',
      '#195103'
   ],
   red: [
      '#FDEEEC',
      '#FBDED9',
      '#F8BDB4',
      '#F07B69',
      '#E83014',
      '#A11601',
      '#610B00'
   ],
   yellow: [
      '#FFFAEC',
      '#FEF5D9',
      '#FDECB3',
      '#FBD966',
      '#F9C310',
      '#C27E00',
      '#914400'
   ],
   gray: [
      '#FAFAFA',
      '#F5F5F5',
      '#EEEEEE',
      '#E1E1E2',
      '#BDBEBF',
      '#9E9FA0',
      '#757778',
      '#636567',
      '#424446',
      '#212426'
   ],
   grayAlpha: [
      'rgba(0, 3, 6, 0.02)',
      'rgba(0, 3, 6, 0.04)',
      'rgba(0, 3, 6, 0.07)',
      'rgba(0, 3, 6, 0.12)',
      'rgba(0, 3, 6, 0.26)',
      'rgba(0, 3, 6, 0.38)',
      'rgba(0, 3, 6, 0.54)',
      'rgba(0, 3, 6, 0.61)',
      'rgba(0, 3, 6, 0.74)',
      'rgba(0, 3, 6, 0.87)'
   ],
   white: '#FFFFFF',
   black: '#000000'
};

export const space = [0, 4, 8, 12, 16, 24, 32, 64, 128, 256];

export const fontSizes = [12, 14, 16, 20, 24, 32, 36, 48];

export const fontWeights = {
   normal: 400,
   bold: 700
};

export const lineHeights = {
   none: 1,
   tight: 1.25,
   normal: 1.5,
   loose: 2
};

export const radii = [0, 4];

export const shadows = [
   `0 0 0 1px ${colors.grayAlpha[3]}`,
   `0 2px 4px 0 ${colors.grayAlpha[3]}`,
   `0 4px 8px 0 ${colors.grayAlpha[3]}, 0 2px 4px 0 ${colors.grayAlpha[2]}`,
   `0 16px 32px 0 ${colors.grayAlpha[3]}, 0 4px 16px 0 ${colors.grayAlpha[2]}`
];

export const breakpoints = ['32em', '40em', '48em', '64em'];

export default {
   colors,
   space,
   fontSizes,
   fontWeights,
   lineHeights,
   radii,
   shadows,
   breakpoints
};
