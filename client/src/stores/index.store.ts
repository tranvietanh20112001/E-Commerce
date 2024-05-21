import { configureStore } from "@reduxjs/toolkit";
// import authReducer from '../features/auth/authSlice';
import productsReducer from "./product.store";
import userState from "./user.store";
export const store = configureStore({
  reducer: {
    users: userState.reducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
