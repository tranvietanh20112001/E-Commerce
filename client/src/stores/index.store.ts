import { configureStore } from "@reduxjs/toolkit";
// import authReducer from '../features/auth/authSlice';
import productsReducer from "../reducers/product.reducer";

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
