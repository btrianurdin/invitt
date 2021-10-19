import { AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import Axios from './axios';

interface ICallApi extends AxiosRequestConfig {
  token?: string;
  serverToken?: string;
}

const callApi = async ({
  url,
  method,
  data,
  token,
  serverToken,
}: ICallApi): Promise<any> => {
  let headers = {};

  if (serverToken) {
    headers = {
      Authorization: `Bearer ${serverToken}`,
    };
  } else if (token) {
    const tokenCookies = Cookies.get('inv_token');

    if (tokenCookies) {
      const jwtToken = Buffer.from(tokenCookies, 'base64').toString();
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }

  const response: AxiosResponse = await Axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);

  if (response.status > 300) return response.data;
  return (response.data as any).data;
};

export default callApi;
