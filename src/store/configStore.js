import { configureStore, combineReducers } from '@reduxjs/toolkit';
import moviesReducer from './reducers/moviesReducer';
import pagesReducer from './reducers/pagesReducer';

const rootReducer = combineReducers({
  moviesData: moviesReducer,
  currentPage: pagesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
