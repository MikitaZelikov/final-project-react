import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as galleryApi from '../gallery-api';

const initialState = {
  isLoading: false,
  data: {},
  // page: '1',
};

export const loadMovies = createAsyncThunk(
  'movies/getMovies',
  (page) => galleryApi.discoverMovies()); // экспорт в Container.js

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  // reducers: {
  //   setPage: (state, action) => {
  //     const initState = state;
  //     initState.page = action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(loadMovies.pending, (state) => {
        const initState = state;
        initState.isLoading = true;
      })
      .addCase(loadMovies.fulfilled, (state, action) => {
        const initState = state;
        initState.isLoading = false;
        initState.data = action.payload;
      });
  },
});

export default moviesSlice.reducer; // экспорт в configStore
// export const { setPage } = moviesSlice.actions; // экспорт в Pagination.js
