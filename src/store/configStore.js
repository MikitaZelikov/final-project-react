import { configureStore, combineReducers } from '@reduxjs/toolkit';
import moviesReducer from './reducers/moviesReducer';
import usersReducer from './reducers/usersReducer';

const rootReducer = combineReducers({
  moviesData: moviesReducer,
  usersData: usersReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
