import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as galleryApi from '../../api/gallery-api';

const initialState = {
  genres: [],
};

export const loadGenres = createAsyncThunk(
  'genres/getGenres', () => galleryApi.getGenres()); // экспорт в Container.js

export const genresSlice = createSlice({
  name: 'genres',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadGenres.fulfilled, (state, action) => {
        const initState = state;
        initState.genres = action.payload.genres;
      });
  },
});

export default genresSlice.reducer; // экспорт в configStore
