import { configureStore } from "@reduxjs/toolkit";
import productState from "./product.store";

const store = configureStore({
  reducer: {
    [productState.name]: productState.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
