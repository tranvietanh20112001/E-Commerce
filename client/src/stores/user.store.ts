import {
  ILoginPayload,
  IRegisterPayload,
  IUserState,
} from "../interfaces/user.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../apis/user.api";
import { IUpdateProductByIdPayload } from "@interfaces/product.interface";

export const name = "userState";
const initialState: IUserState = {
  user: null,
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

// Find user by id ---------------------------------------------
export const findUserById = createAsyncThunk(
  `${name}/findUserById`,
  async (userId: string) => {
    const response = await userService.findUserById(userId);
    return response.data;
  }
);

// Update user by id -------------------------------------------
export const updateUserById = createAsyncThunk(
  `${name}/updateUserById`,
  async ({
    _id,
    payload,
  }: {
    _id: string;
    payload: IUpdateProductByIdPayload;
  }) => {
    const response = await userService.updateUserById(_id, payload);
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

      .addCase(login.fulfilled, (state) => {
        state.error = null;
      })

      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })

      .addCase(register.fulfilled, (state) => {
        state.error = null;
      })

      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(findUserById.fulfilled, (state, action) => {
        state.user = action.payload;
      })

      .addCase(updateUserById.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default userSlice.reducer;
export const { logout } = userSlice.actions;
