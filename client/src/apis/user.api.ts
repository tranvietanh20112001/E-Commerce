import { ILoginPayload, IUser } from "@interfaces/user.interface";
import { axiosInstance } from "../lib/axios.lib";

const login = async (payload: ILoginPayload): Promise<IUser> => {
  return await axiosInstance.post("/auth/login", payload, {
    headers: { "X-Required-Auth": false },
  });
};

export default { login };
