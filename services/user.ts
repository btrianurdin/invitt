import callApi from '../configs/callApi';

const API_VERSION = 'api';

interface IEditAccount {
  fullname: string | undefined;
  gender: string | undefined;
  phoneNumber: string | undefined;
}

export const setEditAccount = async (data: IEditAccount): Promise<any> => {
  const url = `/${API_VERSION}/users`;

  return callApi({
    url,
    method: 'PUT',
    data,
    token: true,
  });
};

export const su = (): null => null;
