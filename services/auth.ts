import { ILogin } from '../interfaces';
import axios from '../configs/axios';

const API_VERSION = 'api';

export const setLogin = async (_dataLogin: ILogin): Promise<any> => {
  const url = `/${API_VERSION}/auth/login`;

  const response = await axios.post(url, _dataLogin);

  return response.data;
};

export const enu = (): null => null;
