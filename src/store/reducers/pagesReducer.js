import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: '1',
};

export const pagesSlice = createSlice({
  name: 'pagesAction',
  initialState,
  reducers: {
    setPage: (state, action) => {
      const initState = state;
      initState.page = action.payload;
    },
  },
});

export const { setPage } = pagesSlice.actions;
export default pagesSlice.reducer;
