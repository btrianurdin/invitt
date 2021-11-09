import { AxiosRequestConfig } from 'axios';
import Cookie from 'js-cookie';
import axios from '../configs/axios';

export const fetcherAuth = async (url: string): Promise<any> => {
  const getToken = Cookie.get('inv_token');

  let headers: Record<string, string> = {};

  if (getToken) {
    const jwtToken = Buffer.from(getToken, 'base64').toString();

    headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtToken}`,
    };
  }

  return axios({
    url,
    method: 'POST',
    headers,
  }).then((res) => res.data);
};

export const fetcherAuthGet = async (url: string): Promise<any> => {
  const getToken = Cookie.get('inv_token');

  let headers: Record<string, string> = {};

  if (getToken) {
    const jwtToken = Buffer.from(getToken, 'base64').toString();

    headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtToken}`,
    };
  }

  return axios({
    url,
    method: 'GET',
    headers,
  }).then((res) => res.data);
};
