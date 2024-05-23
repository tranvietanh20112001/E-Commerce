import { ILoginPayload, IUser } from "@interfaces/user.interface";
import { axiosInstance } from "../lib/axios.lib";

const login = async (payload: ILoginPayload): Promise<IUser> => {
  return await axiosInstance.post("/auth/login", payload, {
    headers: { "X-Required-Auth": false },
  });
};

const loadUser = async (): Promise<IUser> => {
  return await axiosInstance.get("/auth");
};

const register = async (payload: IUser): Promise<IUser> => {
  return await axiosInstance.post("/auth/register", payload, {
    headers: { "X-Required-Auth": false },
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { login, register, loadUser };
