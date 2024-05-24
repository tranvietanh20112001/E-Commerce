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
  loading: boolean;
  error: string | null;
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
