import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as galleryApi from '../../api/gallery-api';
import * as storage from '../../localStorage/storage';

const initialState = {
  isLoading: false,
  data: {},
  page: storage.getCurrentPageNumber() || 1,
  sortBy: storage.getCurrentSortOption() || '',
};

export const loadMovies = createAsyncThunk(
  'movies/getMovies',
  async ({ page, sortBy }) => {
    const moviesResponse = await galleryApi.discoverMovies(page, sortBy);
    return { moviesRes: moviesResponse, page, sortBy };
  },
); // экспорт в Container.js

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadMovies.pending, (state) => {
        const initState = state;
        initState.isLoading = true;
      })
      .addCase(loadMovies.fulfilled, (state, action) => {
        const initState = state;
        initState.isLoading = false;
        initState.data = action.payload.moviesRes;
        initState.page = action.payload.page;
        initState.sortBy = action.payload.sortBy;
      });
  },
});

export default moviesSlice.reducer; // экспорт в configStore
