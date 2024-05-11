import {
  IProduct,
  IFindProductsPayload,
} from "../interfaces/product.interface";

import { axiosInstance } from "../lib/axios.lib";
// import { objectToFormData } from "@utils/data.utils";
import { buildQueryString } from "../utils/string.utils";

// Get all products
export const findAllProducts = async (
  payload: IFindProductsPayload
): Promise<IProduct[]> => {
  const queryString = buildQueryString(payload as { [key: string]: unknown });
  return await axiosInstance.get(`/api/product${queryString}`);
};
