import Cookies from 'js-cookie';
import { ICompleteProfileData, ISignIn, ISignUp } from '../interfaces';
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

export const setCookiesAuth = (token: string): void => {
  const encodeToken = Buffer.from(token).toString('base64');
  Cookies.set('inv_token', encodeToken);
};

export const setSignUp = async (data: ISignUp): Promise<any> => {
  const url = `/${API_VERSION}/auth/register`;

  return callApi({
    url,
    method: 'POST',
    data,
  });
};

export const setCompleteProfile = async (data: ICompleteProfileData): Promise<any> => {
  const url = `/${API_VERSION}/auth/register/completed`;

  return callApi({
    url,
    method: 'POST',
    data,
    token: true,
  });
};

export const setForgotPassword = async (data: { email: string }): Promise<any> => {
  const url = `/${API_VERSION}/auth/forgot-password`;

  return callApi({
    url,
    method: 'POST',
    data,
  });
};

export const setResetPasswordCheck = async (token: string): Promise<any> => {
  const url = `/${API_VERSION}/auth/reset-password/${token}`;

  return callApi({
    url,
    method: 'GET',
  });
};

interface IResetPasswordData {
  newPassword: string;
}

export const setResetPassword = async (token: string, data: IResetPasswordData): Promise<any> => {
  const url = `/${API_VERSION}/auth/reset-password/${token}`;

  return callApi({
    url,
    method: 'POST',
    data,
  });
};
