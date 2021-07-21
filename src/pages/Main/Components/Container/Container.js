import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './container.scss';
// import * as storage from '../../../../localStorage/storage';
import { loadMovies } from '../../../../store/reducers/moviesReducer';
import Movie from '../Movie/Movie';
import Loader from '../Loader/Loader';

const getMovies = (state) => state.moviesData.data;
const getCurrentPage = (state) => state.moviesData.page;
const getSortBy = (state) => state.moviesData.sortBy;
const getRemovedMovies = (state) => state.moviesData.delMovies;

function Container({ isAuth, currentUser }) {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-console
  console.log('render');
  const page = useSelector(getCurrentPage);
  const movies = useSelector(getMovies);
  const sortBy = useSelector(getSortBy);
  const removedMovies = useSelector(getRemovedMovies);

  useEffect(() => {
    dispatch(loadMovies({ page, sortBy }));
  }, [dispatch]);

  return (
    <div className="container">
      <Loader />
      {movies.results?.filter((movie) => !removedMovies.includes(String(movie.id))).map((item) => (
        <Movie
          key={item.id}
          {...item}
          isAuth={isAuth}
          currentUser={currentUser}
        />))
      }
    </div>
  );
}

export default Container;
