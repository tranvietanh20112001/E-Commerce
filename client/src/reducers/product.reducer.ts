import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts, deleteProduct } from "../apis/product.api";
import { IProduct, IDeleteProductPayload } from "@interfaces/product.interface";

interface ProductsState {
  items: IProduct[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  status: "idle",
  error: null,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await fetchProducts();
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
          (item: { _id: any }) => item._id !== action.payload._id
        );
      });
  },
});

export default productsSlice.reducer;
