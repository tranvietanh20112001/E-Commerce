// Login ---------------------------------------
export interface ILoginPayload {
  username: string;
  password: string;
}

export interface ILoginSession {
  _id: string;
  browser: string;
  date: string;
  isCurrentDevice: boolean;
}

export enum ERole {
  Customer = "customer",
  Admin = "admin",
}
export enum EGender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface IUser {
  _id: string;
  username: string;
  name: string;
  avatar_url?: string;
  phone?: string;
  dob?: string;
  gender: EGender;
  role: ERole;
  disabled: boolean;
}

export interface IUserState {
  user: IUser | null;
  users: IUser[];
  loginSessions: ILoginSession[];
  filter: IFindUsersPayload;
}

export interface IFindUsersPayload {
  name?: string;
  role?: ERole | "";
  username?: string;
  skip?: number;
  limit?: number;
}
