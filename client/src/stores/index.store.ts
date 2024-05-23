import { configureStore } from "@reduxjs/toolkit";
// import authReducer from '../features/auth/authSlice';
import productsReducer from "./product.store";
import userReducer from "./user.store";
export const store = configureStore({
  reducer: {
    users: userReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
