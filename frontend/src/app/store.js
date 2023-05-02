import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/postsTable/postsTableSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer
  },
});
