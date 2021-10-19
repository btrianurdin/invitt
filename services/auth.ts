import { ISignIn } from '../interfaces';
import callApi from '../configs/callApi';

const API_VERSION = 'api';

export const setSignIn = async (data: ISignIn): Promise<any> => {
  const url = `/${API_VERSION}/auth/login`;

  return callApi({
    url,
    method: 'POST',
    data,
  });
};

export const enu = (): null => null;
