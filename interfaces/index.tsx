export interface IUser {
  _id: string;
  gender: string;
  status: string;
  fullname: string;
  phoneNumber: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IUseUser {
  data: IUser | any;
  isLoading: boolean;
  isError: boolean;
}
