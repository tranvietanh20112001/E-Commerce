import axios from "axios";
import { API_URL } from "@config/config";
import {
  ICreateProductPayload,
  IProduct,
  IUpdateProductByIdPayload,
} from "@interfaces/product.interface";
import { axiosInstance } from "@lib/axios.lib";
import { objectToFormData } from "@utils/data.util";
export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/product/`);
  return response.data;
};

export const createProduct = async (
  productData: ICreateProductPayload
): Promise<IProduct> => {
  const response = await axiosInstance.post(
    `${API_URL}/product/`,
    objectToFormData({ ...productData }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export const deleteProduct = async (productId: string) => {
  const response = await axios.delete(`${API_URL}/product/${productId}`);
  return response.data;
};

export const findProductById = async (payload: string) => {
  return axios.get(`${API_URL}/product/${payload}`);
};

export const updateProduct = async (
  productId: string,
  productData: IUpdateProductByIdPayload
) => {
  const response = await axios.put(`${API_URL}/product/${productId}`, {
    ...productData,
  });
  return response.data;
};
