import axios from "axios";
import { API_URL } from "../config/config";
import {
  ICreateProductPayload,
  IProduct,
} from "../interfaces/product.interface";
import { objectToFormData } from "src/utils/data.util";
export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/product/`);
  return response.data;
};

export const createProduct = async (
  productData: ICreateProductPayload
): Promise<IProduct> => {
  const response = await axios.post<ICreateProductPayload>(
    `${API_URL}/product/`,
    productData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  console.log(productData);

  return response.data;
};

export const deleteProduct = async (productId: string) => {
  const response = await axios.delete(`${API_URL}/product/${productId}`);
  return response.data;
};
