import axios from "axios";
import { API_URL } from "../config/config";

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/product/GetAllProducts`);
  return response.data;
};

export const deleteProduct = async (productId: string) => {
  const response = await axios.delete(`${API_URL}/product/${productId}`);
  return response.data;
};
