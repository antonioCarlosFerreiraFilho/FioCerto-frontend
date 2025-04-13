import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  errors: false,
  success: false,
  loading: false,
  message: null,
};

// Register
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    
    const data = await authService.register(user);

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }
    
    
    return data;
  }
);

// Login
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  const data = await authService.login(user);

  if (data.errors) {
    return thunkAPI.rejectWithValue(data.errors[0]);
  }

  return data;
});

// Logout
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

// AUTHSLICE
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.errors = null;
      state.success = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.errors = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.errors = null;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.errors = action.payload;
      })
      // Login
      .addCase(login.pending, (state) => {
        state.loading = false;
        state.errors = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.errors = null;
        state.success = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.errors = action.payload;
      })
      // LOGOUT
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.errors = null;
        state.user = null;
        state.success = true;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
