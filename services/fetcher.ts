import Cookie from 'js-cookie';
import axios from '../configs/axios';

export const fetcherAuth = async (url: string): Promise<any> => {
  const getToken = Cookie.get('inv_token');

  let headers: Record<string, string> = {};

  if (getToken) {
    headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken}`,
    };
  }

  return axios({
    url,
    method: 'POST',
    headers,
  }).then((res) => res.data);
};

export const test = (): any => null;
