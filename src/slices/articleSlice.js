import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import articleService from "../services/articleService";

const initialState = {
  articles: [],
  recently: [],
  about: [],
  article: {},
  errors: false,
  success: false,
  loading: false,
  message: null,
};

// Pagination
export const PaginationArticle = createAsyncThunk(
  "article/list",
  async (page, thunkAPI) => {
    const data = await articleService.PaginationArticle(page);

    return data;
  }
);

// GetArticle
export const GetArticle = createAsyncThunk("article/GetArticle", async (id) => {
  const data = await articleService.GetArticle(id);

  return data;
});

// RecentlyPostedArticle
export const RecentlyPostedArticle = createAsyncThunk(
  "article/show",
  async () => {
    const data = await articleService.RecentlyPostedArticle();

    return data;
  }
);

// About Article
export const aboutArticle = createAsyncThunk("article/about", async () => {
  const data = await articleService.aboutArticle();

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

// SEARCH
export const SearchArticle = createAsyncThunk(
  "article/search",
  async (query, thunkAPI) => {
    const data = await articleService.SearchArticle(query);

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
      // PaginationArticle
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
      // Recently
      .addCase(RecentlyPostedArticle.pending, (state) => {
        state.loading = true;
        state.errors = false;
      })
      .addCase(RecentlyPostedArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.errors = null;
        state.recently = action.payload;
      })
      // About Article
      .addCase(aboutArticle.pending, (state) => {
        state.loading = true;
        state.errors = false;
      })
      .addCase(aboutArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.errors = null;
        state.about = action.payload;
      })
      // COMMENTS
      .addCase(CommentsArticle.fulfilled, (state, actions) => {
        state.loading = false;
        state.success = true;
        state.errors = null;

        state.article.comments.push(actions.payload.comments);

        state.message = " Comentário Publicado. ";
      })
      .addCase(CommentsArticle.rejected, (state, actions) => {
        state.loading = false;
        state.success = false;
        state.errors = actions.payload;
      })
      // SEARCH
      .addCase(SearchArticle.pending, (state) => {
        state.loading = true;
        state.errors = false;
      })
      .addCase(SearchArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.errors = null;
        state.articles = action.payload;
      })
      .addCase(SearchArticle.rejected, (state, actions) => {
        state.loading = false;
        state.success = false;
        state.errors = actions.payload;
      });
  },
});

export const { reset } = articleSlice.actions;
export default articleSlice.reducer;
