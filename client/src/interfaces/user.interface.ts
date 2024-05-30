// Login ---------------------------------------
export interface ILoginPayload {
  username: string;
  password: string;
}

export enum EGender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface IUser {
  _id: string;
  username: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  address: {
    city: string;
    district: string;
    ward: string;
    street: string;
  };
  created_at: Date;
  updated_at: Date;
  is_active: boolean;
  is_admin: boolean;
}

export interface IUserState {
  user: IUser | null;
  error: string | null;
  users: IUser[];
}

export interface IFindUsersPayload {
  name?: string;
  username?: string;
  gender?: EGender;
  is_active?: boolean;
  sort?: string;
  order?: string;
  skip?: number;
  limit?: number;
}

export interface IRegisterPayload {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  is_admin: false;
  gender: EGender;
}

export interface IGetAllUsersPayload {
  first_name?: string;
  last_name?: string;
  username?: string;
  gender?: EGender;
  is_active?: boolean;
  sort?: string;
  order?: string;
  skip?: number;
  limit?: number;
}

export interface IFindUserByIdPayload {
  _id?: string;
}

export interface IUpdateUserByIdPayload {
  _id: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  gender?: EGender;
}
