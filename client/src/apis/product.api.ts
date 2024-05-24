import axios from "axios";
import { API_URL } from "@config/config";
import { ICreateProductPayload, IProduct } from "@interfaces/product.interface";
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
