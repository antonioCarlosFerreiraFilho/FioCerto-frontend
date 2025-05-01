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

// Pagination
export const PaginationArticle = createAsyncThunk(
  "article/list",
  async (thunkAPI) => {
    const data = await articleService.PaginationArticle();

    return data;
  }
);

// GetArticle
export const GetArticle = createAsyncThunk("article/GetArticle", async (id) => {
  const data = await articleService.GetArticle(id);

  return data;
});

// Comments
export const CommentsArticle = createAsyncThunk(
  "article/comments",
  async (commentData, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await articleService.CommentsArticle(
      { comments: commentData.comments },
      commentData.id,
      token
    );

    //check errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

// Slices
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
      })
      // GetArticle
      .addCase(GetArticle.pending, (state) => {
        state.loading = true;
        state.errors = false;
      })
      .addCase(GetArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.errors = null;
        state.article = action.payload;
      })
      // COMMENTS
      .addCase(CommentsArticle.fulfilled, (state, actions) => {
        state.loading = false;
        state.success = true;
        state.errors = null;

        state.article.comments.push(actions.payload.comments);
      })
      .addCase(CommentsArticle.rejected, (state, actions) => {
        state.loading = false;
        state.success = false;
        state.errors = actions.payload;
      });
  },
});

export const { reset } = articleSlice.actions;
export default articleSlice.reducer;
