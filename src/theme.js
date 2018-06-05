import { constants } from '@ifixit/toolbox';

export const colors = constants.color;

export const space = [0, 4, 8, 12, 16, 24, 32, 64, 128, 256];

export const fontSizes = constants.fontSize;

export const fontWeights = {
   normal: 400,
   bold: 700,
};

export const lineHeights = {
   none: 1,
   tight: 1.25,
   normal: 1.5,
   loose: 2,
};

export const radii = [0, 4];

export const shadows = [
   `0 0 0 1px ${colors.grayAlpha[3]}`,
   `0 2px 4px 0 ${colors.grayAlpha[3]}`,
   `0 4px 8px 0 ${colors.grayAlpha[3]}, 0 2px 4px 0 ${colors.grayAlpha[2]}`,
   `0 16px 32px 0 ${colors.grayAlpha[3]}, 0 4px 16px 0 ${colors.grayAlpha[2]}`,
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
   breakpoints,
};
