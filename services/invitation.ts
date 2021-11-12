import callApi from '../configs/callApi';

const API_VERSION = 'api';

export const getInvitationPublic = async (param: string): Promise<any> => {
  const url = `/${API_VERSION}/invitations/${param}`;

  return callApi({
    url,
    method: 'GET',
  });
};

export const getInvitation = async (): Promise<any> => {
  const url = `/${API_VERSION}/invitations`;

  return callApi({
    url,
    method: 'GET',
    token: true,
  });
};

export const getWeddingDate = async (): Promise<any> => {
  const url = `/${API_VERSION}/invitations/wedding-dates`;

  return callApi({
    url,
    method: 'GET',
    token: true,
  });
};

export const getGallery = async (): Promise<any> => {
  const url = `/${API_VERSION}/invitations/galleries`;

  return callApi({
    url,
    method: 'GET',
    token: true,
  });
};

export const nulltest = (): null => null;
