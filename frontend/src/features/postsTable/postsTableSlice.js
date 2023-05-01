import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  searchKeyWord: '',
};

export const postsTableSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.value = state.value.concat( action.payload );
    },
    deletePost: (state, action) => {
      state.value = state.value.filter( (post) => post.id !== action.payload )
    },
    updateSearchKeyWord: (state, action) => {
      state.searchKeyWord = action.payload
    }
  }
});

export const { addPosts, deletePost, updateSearchKeyWord } = postsTableSlice.actions;

export const selectPosts = (state) => state.posts.value;

export const selectSearchKeyWord = (state) => state.posts.searchKeyWord;

export default postsTableSlice.reducer;
