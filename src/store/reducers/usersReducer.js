import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as dataUsers from '../../api/gallery-api';
import * as storage from '../../localStorage/storage';

const initialState = {
  allUsers: [],
  currentUser: storage.getCurrentUser() || {},
  isAuth: storage.getCurrentUser() !== null,
};

export const loadUsers = createAsyncThunk(
  'users/getUsers', () => dataUsers.getMergeUsers()); // экспорт в Basic.js

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
    logOut: (state) => {
      const initState = state;
      initState.isAuth = null;
      initState.currentUser = {};
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

export const { addUser, addCurrentUser, logOut } = usersSlice.actions;
export default usersSlice.reducer; // экспорт в configStore
