import callApi from '../configs/callApi';

const API_VERSION = 'api';

export const setGallery = async (content: string): Promise<any> => {
  const url = `/${API_VERSION}/invitations/galleries`;

  return callApi({
    url,
    data: { content },
    method: 'POST',
    token: true,
  });
};

export const removeGallery = (id: string): Promise<any> => {
  const url = `/${API_VERSION}/invitations/galleries/${id}`;

  return callApi({
    url,
    method: 'DELETE',
    token: true,
  });
};
