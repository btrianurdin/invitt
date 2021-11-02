export interface IUser {
  _id: string;
  gender: string;
  status: string;
  fullname: string;
  phoneNumber: string;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface IUseUser {
  data: IUser | any;
  isLoading: boolean;
  isError: boolean;
}

export interface ISignUp {
  email: string;
  fullname: string;
  password: string;
  gender: string;
  phoneNumber: string;
}

export interface ICompleteProfileData {
  web_url: string;
  groom_fullname: string;
  bride_fullname: string;
  template?: string;
}
