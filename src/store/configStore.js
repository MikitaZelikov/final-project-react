import { configureStore, combineReducers } from '@reduxjs/toolkit';
import moviesReducer from './reducers/moviesReducer';
import usersReducer from './reducers/usersReducer';
import genresReducer from './reducers/genresReducer';

const rootReducer = combineReducers({
  moviesData: moviesReducer,
  usersData: usersReducer,
  genresData: genresReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
