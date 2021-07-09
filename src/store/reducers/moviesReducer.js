import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as galleryApi from '../../api/gallery-api';

const initialState = {
  isLoading: false,
  data: {},
  page: 1,
};

export const loadMovies = createAsyncThunk(
  'movies/getMovies',
  async (page) => {
    const moviesResponse = await galleryApi.discoverMovies(page);
    return { moviesRes: moviesResponse, page };
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
      });
  },
});

export default moviesSlice.reducer; // экспорт в configStore
