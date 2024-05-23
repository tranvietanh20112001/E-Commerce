import { ILoginPayload, IUserState } from "../interfaces/user.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../apis/user.api";

export const name = "userState";
const initialState: IUserState = {
  user: null,
  loading: false,
  error: null,
};

// Login --------------------------------------------------------
export const login = createAsyncThunk(
  `${name}/login`,
  async (payload: ILoginPayload) => {
    const response = await userService.login(payload);
    localStorage.setItem("token", response.data.token);
    return response.data;
  }
);

// Get current user ---------------------------------------------
export const getCurrentUser = createAsyncThunk(
  `${name}/getCurrentUser`,
  async (token: string) => {
    const response = await userService.loadUser(token);
    return response.data;
  }
);

const userSlice = createSlice({
  name,
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("token");
      console.log("Logout successfully");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default userSlice.reducer;
export const { logout } = userSlice.actions;
