export const colorTheme = {
  default: '#FFFFFF',
  pink: '#F037A5',
  danger: '#E72A2A',
  success: '#25953E',
  purple: '#2D46B9',
};

export const templateList = [
  {
    displayName: 'Green Love',
    name: 'GreenLove',
    image: 'https://res.cloudinary.com/trianurdin/image/upload/v1635591758/GreenLove_dhkbot.jpg',
  },
  {
    displayName: 'Romantic Red',
    name: 'RomanticRed',
    image: 'https://res.cloudinary.com/trianurdin/image/upload/v1635591758/RomanticRed_clpamp.png',
  },
];

export const titleName = (relative: string): string => `
  ${relative ? `${relative} | ` : ''} invitt - create your invitation website
`;

export const capitalize = (str: string): string => (
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
);

export const dummyImg = {
  bridePic: 'https://res.cloudinary.com/trianurdin/image/upload/v1636082453/claire-graham-blackburn-bridal-fontaine-106_j0xqdc.jpg',
  groomPic: 'https://res.cloudinary.com/trianurdin/image/upload/v1636082353/Eric_Kelley-Kuhl-groom_b0fkdc.jpg',
};
