import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchProducts,
  deleteProduct,
  createProduct,
} from "../apis/product.api";
import {
  IDeleteProductPayload,
  ICreateProductPayload,
  ProductsState,
} from "@interfaces/product.interface";

const initialState: ProductsState = {
  items: [],
  status: "idle",
  error: null,
};

// Get All Products ------------------------------------------
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await fetchProducts();
    return response;
  }
);

// Create Product ------------------------------------------
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (productData: ICreateProductPayload) => {
    const response = await createProduct(productData);
    return response;
  }
);

// Delete Product ------------------------------------------
export const deleteProductById = createAsyncThunk(
  "products/deleteProduct",
  async (payload: IDeleteProductPayload) => {
    await deleteProduct(payload._id);
    return payload;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch products";
      })
      .addCase(deleteProductById.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item: { _id: string }) => item._id !== action.payload._id
        );
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default productsSlice.reducer;
