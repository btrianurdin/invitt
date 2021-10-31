export const colorTheme = {
  default: '#FFFFFF',
  pink: '#F037A5',
  danger: '#E72A2A',
  success: '#25953E',
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

export const test = null;
