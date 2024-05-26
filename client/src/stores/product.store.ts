import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchProducts,
  deleteProduct,
  createProduct,
  findProductById,
} from "../apis/product.api";
import {
  IDeleteProductPayload,
  ICreateProductPayload,
  ProductsState,
} from "@interfaces/product.interface";

const initialState: ProductsState = {
  products: [],
  product: null,
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

// Get Product By Id ------------------------------------------
export const getProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id: string) => {
    const response = await findProductById(id);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(deleteProductById.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product: { _id: string }) => product._id !== action.payload._id
        );
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.product = action.payload;
      });
  },
});

export default productsSlice.reducer;
