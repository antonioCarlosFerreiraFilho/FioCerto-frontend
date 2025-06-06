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

// Get
export const GetArticle = createAsyncThunk("article/GetArticle", async (id) => {
  const data = await articleService.GetArticle(id);

  return data;
});

//Like project
export const LikesArticle = createAsyncThunk(
  "article/likes",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    const data = await articleService.LikesArticle(id, token);

    //check errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

//Views
export const ViewsArticle = createAsyncThunk("article/views", async (id) => {
  const data = await articleService.ViewsArticle(id);

  //check errors
  if (data.errors) {
    return thunkAPI.rejectWithValue(data.errors[0]);
  }

  return data;
});

// Recently
export const RecentlyPostedArticle = createAsyncThunk(
  "article/show",
  async () => {
    const data = await articleService.RecentlyPostedArticle();

    return data;
  }
);

// About
export const aboutArticle = createAsyncThunk("article/about", async () => {
  const data = await articleService.aboutArticle();

  return data;
});

// Update
export const UpdateArticle = createAsyncThunk(
  "article/update",
  async (updateData, ThunkAPI) => {
    const token = ThunkAPI.getState().auth.user.token;

    const data = await articleService.UpdateArticle(
      {
        miniDescri: updateData.miniDescri,
        firstDescri: updateData.firstDescri,
        lastDescri: updateData.lastDescri,
      },
      updateData.id,
      token
    );

    if (data.errors) {
      return ThunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

// Delete
export const DeleteArticle = createAsyncThunk(
  "article/delete",
  async (id, ThunkAPI) => {
    const token = ThunkAPI.getState().auth.user.token;

    const data = await articleService.DeleteArticle(id, token);

    if (data.errors) {
      return ThunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

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

// Delete Comment
export const DelCommentsArticle = createAsyncThunk(
  "article/deleteComment",
  async (dataComment, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await articleService.DelCommentsArticle(dataComment, token);

    //check errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

// Search
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
      // Pagination
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
      // Get
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
      //Likes
      .addCase(LikesArticle.fulfilled, (state, actions) => {
        state.loading = false;
        state.success = true;
        state.errors = null;

        if (state.article.likes) {
          state.article.likes.push(actions.payload.userId);
        }
      })
      .addCase(LikesArticle.rejected, (state, actions) => {
        state.loading = false;
        state.success = false;
        state.errors = actions.payload;
      })
      //Views
      .addCase(ViewsArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.errors = null;
        state.article.views = action.payload;
      })
      .addCase(ViewsArticle.rejected, (state, actions) => {
        state.loading = false;
        state.success = false;
        state.errors = actions.payload;
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
      // About
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
      // Update
      .addCase(UpdateArticle.pending, (state) => {
        state.loading = true;
        state.errors = false;
      })
      .addCase(UpdateArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.errors = null;
        state.article.map((article) => {
          if (article._id === action.payload.article._id) {
            return [(article.miniDescri = action.payload.article.miniDescri)];
          }
          return article;
        });
        state.message = " Artigo atualizado. ";
      })
      .addCase(UpdateArticle.rejected, (state, actions) => {
        state.loading = false;
        state.success = false;
        state.errors = actions.payload;
      })
      // Delete
      .addCase(DeleteArticle.pending, (state) => {
        state.loading = true;
        state.errors = false;
      })
      .addCase(DeleteArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.errors = null;
        state.articles = state.articles.filter((article) => {
          return article._id !== action.payload.id;
        });
      })
      .addCase(DeleteArticle.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload;
      })
      // Comment
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
      // Delete Comment
      .addCase(DelCommentsArticle.pending, (state) => {
        state.loading = true;
        state.errors = false;
      })
      .addCase(DelCommentsArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.errors = null;
        state.article.comments.push(action.payload.comments);
      })
      .addCase(DelCommentsArticle.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload;
      })
      // Search
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
