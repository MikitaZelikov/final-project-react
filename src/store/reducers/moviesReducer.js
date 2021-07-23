import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as galleryApi from '../../api/gallery-api';
import * as storage from '../../localStorage/storage';

const initialState = {
  isLoading: false,
  data: [],
  page: storage.getCurrentPageNumber() || 1,
  sortBy: storage.getCurrentSortOption() || '',
  voted: storage.getVotedMovies() || [],
  delMovies: storage.getIdRemoveMovies() || [],
  addedMovies: storage.getAddedMovies() || [],
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
  reducers: {
    resetValue: (state) => {
      const initState = state;
      initState.page = 1;
      initState.sortBy = '';
    },
    addVoted: (state, action) => {
      state.voted.push(action.payload);
    },
    addIdRemoveMovie: (state, action) => {
      state.delMovies.push(action.payload);
    },
    addMovie: (state, action) => {
      state.addedMovies.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMovies.pending, (state) => {
        const initState = state;
        initState.isLoading = true;
      })
      .addCase(loadMovies.fulfilled, (state, action) => {
        const initState = state;
        initState.isLoading = false;
        initState.page = action.payload.page;
        initState.sortBy = action.payload.sortBy;
        initState.data = action.payload.moviesRes.results;

        if (state.addedMovies.length && state.page === 1 && !state.sortBy) {
          initState.data.splice(0, state.addedMovies.length);
          initState.data = state.addedMovies.concat(initState.data);
        }
      });
  },
});

export const { resetValue, addVoted, addIdRemoveMovie, addMovie } = moviesSlice.actions;
export default moviesSlice.reducer; // экспорт в configStore
