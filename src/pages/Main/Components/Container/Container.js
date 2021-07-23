import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './container.scss';
import { loadMovies } from '../../../../store/reducers/moviesReducer';
import Movie from '../Movie/Movie';
import Loader from '../Loader/Loader';

const getMovies = (state) => state.moviesData.data;
const getCurrentPage = (state) => state.moviesData.page;
const getSortBy = (state) => state.moviesData.sortBy;
const getRemovedMovies = (state) => state.moviesData.delMovies;

function Container({ isAuth, currentUser }) {
  const dispatch = useDispatch();
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
      {movies?.filter((movie) => !removedMovies.includes(String(movie.id))).map((item) => (
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
