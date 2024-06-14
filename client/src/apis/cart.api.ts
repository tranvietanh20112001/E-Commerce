import axios from "axios";
import { API_URL } from "@config/config";

export const fetchCarts = async () => {
  const response = await axios.get(`${API_URL}/cart`);
  return response.data;
};

export const createCart = async () => {
  const response = await axios.post(`${API_URL}/cart/add-to-cart`);
  return response.data;
};
