export interface IUser {
  _id: string;
  gender: string;
  status: string;
  email: string;
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

export interface IPicData {
  public_name?: string;
  url?: string;
}

export interface IInvitationData {
  bride_pic?: IPicData;
  groom_pic?: IPicData;
  status?: 'hide' | 'show';
  _id?: string;
  web_url?: string;
  groom_fullname?: string;
  bride_fullname?: string;
  template?: string;
  hero_title?: string;
  groom_shortname?: string;
  bride_shortname?: string;
  introduce_title?: string;
  groom_text?: string;
  bride_text?: string;
  greeting?: string;
  active_at?: Date;
  expired_at?: Date;
}

export interface IWeddingDateData {
  _id?: string;
  title?: string;
  place_name?: string;
  date?: string;
  location?: string;
  map_link?: string;
  invitation?: string;
}

export interface IGalleryData {
  _id?: string;
  public_name?: string;
  url?: string;
  invitation?: string;
}

export interface IUseInvitation {
  isLoading: boolean;
  invitation: IInvitationData | null;
  weddingDate: Array<IWeddingDateData> | null;
  gallery: Array<IGalleryData> | null;
}

export interface ITemplateProps {
  invitation: IInvitationData | null;
  weddingDates: IWeddingDateData[] | null;
}

export interface IUploadPicture {
  field?: 'groom' | 'bride';
  content?: string;
}
