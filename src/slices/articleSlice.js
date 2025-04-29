import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import articleService from "../services/articleService";

const initialState = {
  articles: [],
  article: {},
  errors: false,
  success: false,
  loading: false,
  message: null,
};

// SEARCH
export const PaginationArticle = createAsyncThunk(
  "article/list",
  async (thunkAPI) => {
    const data = await articleService.PaginationArticle();

    return data;
  }
);

// POST SLICE
export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.message = null;
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // SHOW
      .addCase(PaginationArticle.pending, (state) => {
        state.loading = true;
        state.errors = false;
      })
      .addCase(PaginationArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.errors = null;
        state.articles = action.payload;
      });
  },
});

export const { reset } = articleSlice.actions;
export default articleSlice.reducer;
