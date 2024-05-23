import { ILoginPayload, IUserState } from "../interfaces/user.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../apis/user.api";

export const name = "userState";
const initialState: IUserState = {
  user: null,
  users: [],
};

// Login --------------------------------------------------------
export const login = createAsyncThunk(
  `${name}/login`,
  async (payload: ILoginPayload) => {
    return await userService.login(payload);
  }
);

// Get current user ---------------------------------------------
export const getCurrentUser = createAsyncThunk(
  `${name}/getCurrentUser`,
  async () => {
    return await userService.loadUser();
  }
);

export const userState = createSlice({
  name,
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    // Login --------------------------------------------------------
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    // Get current user ---------------------------------------------
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default userState.reducer;
