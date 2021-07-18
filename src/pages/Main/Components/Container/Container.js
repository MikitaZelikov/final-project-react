import './container.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// import * as storage from '../../../../localStorage/storage';
import { loadMovies } from '../../../../store/reducers/moviesReducer';
import Movie from '../Movie/Movie';
import Loader from '../Loader/Loader';

const getMovies = (state) => state.moviesData.data;
const getCurrentPage = (state) => state.moviesData.page;
const getSortBy = (state) => state.moviesData.sortBy;

function Container({ isAuth, currentUser }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovies({ page, sortBy }));
  }, [dispatch]);

  let page = useSelector(getCurrentPage);
  const movies = useSelector(getMovies);
  let sortBy = useSelector(getSortBy);

  return (
    <div className="container">
      <Loader />
      {movies.results?.map((movie) => (
        <Movie
          key={movie.id}
          {...movie}
          isAuth={isAuth}
          currentUser={currentUser}
        />
      ))}
    </div>
  );
}

export default Container;
