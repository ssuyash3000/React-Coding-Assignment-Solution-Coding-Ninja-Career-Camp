import { createSlice } from "@reduxjs/toolkit";

// import redux toolkit methods here
const INITIAL_STATE = { comments: [], isLoading: true, error: null };

// define comments reducer function here
const commentSlice = createSlice({
  name: "comments",
  initialState: INITIAL_STATE,
  reducers: {
    setInitialState: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.comments = [...action.payload];
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// export the comments reducer function and action creators here

export const commentReducer = commentSlice.reducer;
export const commentActions = commentSlice.actions;
// export the comments selector function here
export const commentSelector = (state) => state.commentReducer;
