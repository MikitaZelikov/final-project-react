import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as dummyData from '../../auth/auth-user';

const initialState = {
  dummyUsers: [],
};
export const loadUsers = createAsyncThunk(
  'users/getUsers', () => dummyData.getDummyUsers()); // экспорт в Routers.js

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.fulfilled, (state, action) => {
        const initState = state;
        initState.dummyUsers = action.payload;
      });
  },
});
export default usersSlice.reducer; // экспорт в configStore
