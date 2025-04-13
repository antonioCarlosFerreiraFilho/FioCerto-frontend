import { configureStore } from "@reduxjs/toolkit";

// SLICES
import authSlice from "./slices/authSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
});
