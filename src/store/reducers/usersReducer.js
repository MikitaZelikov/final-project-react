import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as dataUsers from '../../api/gallery-api';

const initialState = {
  allUsers: [],
  currentUser: {},
  isAuth: false,
};
export const loadUsers = createAsyncThunk(
  'users/getUsers', () => dataUsers.getMergeUsers()); // экспорт в Routers.js

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.allUsers.push(action.payload);
      const initState = state;
      initState.currentUser = action.payload;
      initState.isAuth = true;
    },
    addCurrentUser: (state, action) => {
      const initState = state;
      initState.currentUser = action.payload;
      initState.isAuth = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.fulfilled, (state, action) => {
        const initState = state;
        initState.allUsers = action.payload;
      });
  },
});

export const { addUser, addCurrentUser } = usersSlice.actions;
export default usersSlice.reducer; // экспорт в configStore
