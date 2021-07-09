import { configureStore, combineReducers } from '@reduxjs/toolkit';
import moviesReducer from './reducers/moviesReducer';

const rootReducer = combineReducers({
  moviesData: moviesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
