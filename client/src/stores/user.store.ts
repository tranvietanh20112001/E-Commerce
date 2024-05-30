import {
  ILoginPayload,
  IRegisterPayload,
  IUpdateUserByIdPayload,
  IUserState,
} from "../interfaces/user.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../apis/user.api";

export const name = "userState";
const initialState: IUserState = {
  user: null,
  loading: false,
  error: null,
  users: [],
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

// Register -----------------------------------------------------
export const register = createAsyncThunk(
  `${name}/register`,
  async (payload: IRegisterPayload) => {
    const response = await userService.register(payload);
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

// Get all users -----------------------------------------------
export const getUsers = createAsyncThunk(`${name}/getUsers`, async () => {
  const response = await userService.getUsers();
  return response.data;
});

// Update user -------------------------------------------------
export const updateUserById = createAsyncThunk(
  `${name}/updateUser`,
  async ({
    _id,
    payload,
  }: {
    _id: string;
    payload: IUpdateUserByIdPayload;
  }) => {
    return await userService.updateUser(_id, payload);
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
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      })
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default userSlice.reducer;
export const { logout } = userSlice.actions;
