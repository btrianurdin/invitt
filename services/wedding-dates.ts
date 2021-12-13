import callApi from '../configs/callApi';
import { IWeddingDateData } from '../interfaces';

const API_VERSION = 'api';

export const setWeddingDate = async (data: IWeddingDateData): Promise<any> => {
  const url = `/${API_VERSION}/invitations/wedding-dates`;

  return callApi({
    url,
    data,
    method: 'POST',
    token: true,
  });
};

export const removeWeddingDate = async (id: string): Promise<any> => {
  const url = `/${API_VERSION}/invitations/wedding-dates/${id}`;

  return callApi({
    url,
    method: 'DELETE',
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

export const getWeddingDatePublic = async (param: string): Promise<any> => {
  const url = `/${API_VERSION}/invitations/${param}/wedding-dates`;

  return callApi({
    url,
    method: 'GET',
  });
};
