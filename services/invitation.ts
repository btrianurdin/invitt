import callApi from '../configs/callApi';
import { IInvitationData, IUploadPicture } from '../interfaces';

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

export const setInvitationPic = async (data: IUploadPicture): Promise<any> => {
  const url = `/${API_VERSION}/invitations/picture`;

  return callApi({
    url,
    data,
    method: 'PUT',
    token: true,
  });
};
export const removeInvitationPic = async (data: IUploadPicture): Promise<any> => {
  const url = `/${API_VERSION}/invitations/picture`;

  return callApi({
    url,
    data,
    method: 'DELETE',
    token: true,
  });
};

export const setGeneralInvitation = async (data: IInvitationData | null): Promise<any> => {
  const url = `/${API_VERSION}/invitations`;

  return callApi({
    url,
    data,
    method: 'PUT',
    token: true,
  });
};
