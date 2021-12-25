import { IInvitationData } from '../interfaces';
import { invitationDummy } from './dummy-data';

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
  bride: 'https://res.cloudinary.com/trianurdin/image/upload/v1636082453/claire-graham-blackburn-bridal-fontaine-106_j0xqdc.jpg',
  groom: 'https://res.cloudinary.com/trianurdin/image/upload/v1636082353/Eric_Kelley-Kuhl-groom_b0fkdc.jpg',
};

export const invitationPrint = (key: string, data: IInvitationData | null): any => (
  (data && (data as any)[key]) || (invitationDummy as any)[key]
);

export const allowedExtention = ['jpg', 'png', 'jpeg'];

export const fileToBase64 = async (file: File): Promise<any> => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (e) => reject(e);
});
