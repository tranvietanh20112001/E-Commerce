import {
  IFindProductsPayload,
  IProductState,
} from "@interfaces/product.interface";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { findAllProducts } from "../services/product.service";

const name = "productState";
const initalState: IProductState = {
  products: [],
  product: null,
};

// Find all products
export const findallProducts = createAsyncThunk(
  `${name}/findAllProducts`,
  async (payload: IFindProductsPayload) => {
    const products = await findAllProducts(payload);
    return products;
  }
);

// product State
const productState = createSlice({
  name,
  initialState: initalState,
  reducers: {},
  extraReducers: (builder) => {
    // Find all products
    builder.addCase(findallProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productState;
