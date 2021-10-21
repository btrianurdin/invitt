export const colorTheme = {
  default: '#FFFFFF',
  pink: '#F037A5',
  danger: '#E72A2A',
  success: '#25953E',
};

export const titleName = (relative: string): string => `
  ${relative ? `${relative} | ` : ''} invitt - create your invitation website
`;

export const capitalize = (str: string): string => (
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
);

export const test = null;
