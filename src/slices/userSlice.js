import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../services/userService";

const initialState = {
  user: {},
  users: [],
  errors: false,
  success: false,
  loading: false,
  message: null,
};

// Profile
export const profile = createAsyncThunk(
  "user/profile",
  async (user, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await userService.profile(user, token);

    return data;
  }
);

// Update
export const updateUser = createAsyncThunk(
  "user/Update",
  async (userData, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await userService.updateUser(userData, token);

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

// Delete
export const deleteUser = createAsyncThunk(
  "user/delete",
  async (id, ThunkAPI) => {
    const token = ThunkAPI.getState().auth.user.token;

    const data = await userService.deleteUser(id, token);

    if (data.errors) {
      return ThunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

// ShowUsers
export const showUser = createAsyncThunk("user/show", async () => {
  const data = await userService.showUser();

  return data;
});

// Search
export const searchUser = createAsyncThunk(
  "user/search",
  async (query, thunkAPI) => {
    const data = await userService.searchUser(query);

    return data;
  }
);

// USER SLICE
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.errors = null;
      state.loading = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //Profile
      .addCase(profile.pending, (state) => {
        state.loading = true;
        state.errors = false;
      })
      .addCase(profile.fulfilled, (state, actions) => {
        state.loading = false;
        state.success = true;
        state.errors = null;
        state.user = actions.payload;
      })
      //UPDATE USER
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.errors = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.errors = null;
        state.user = action.payload;
        state.message = " Usuario atualizado. ";
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload;

        state.user = {};
      })
      //ShowUsers
      .addCase(showUser.pending, (state) => {
        state.loading = true;
        state.errors = false;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.errors = null;
        state.users = action.payload;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
