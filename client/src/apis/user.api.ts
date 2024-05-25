import { ILoginPayload, IRegisterPayload } from "@interfaces/user.interface";
import { axiosInstance } from "@lib/axios.lib";
import { API_URL } from "@config/config";
import axios from "axios";

export const login = async (payload: ILoginPayload) => {
  return axios.post(`${API_URL}/auth/login`, payload);
};

// Load User
const loadUser = async (token: string) => {
  return axios.get(`${API_URL}/auth/user`, {
    headers: { Authorization: token },
  });
};

const register = async (payload: IRegisterPayload) => {
  return await axiosInstance.post("/auth/register", payload, {
    headers: { "X-Required-Auth": false },
  });
};

// Get all users
const getUsers = async () => {
  return await axios.get(`${API_URL}/auth/users`);
};

export default { login, register, loadUser, getUsers };
