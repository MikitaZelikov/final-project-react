import './container.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { loadMovies } from '../../../../store/reducers/moviesReducer';
import Movie from '../Movie/Movie';
import Loader from '../Loader/Loader';

const getMovies = (state) => state.moviesData.data;
const getCurrentPage = (state) => state.currentPage.page;

function Container() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovies(page));
  }, [dispatch]);

  const page = useSelector(getCurrentPage);
  // debugger;
  const movies = useSelector(getMovies);

  return (
    <div className="container">
      <Loader />
      {movies.results?.map((movie) => (
        <Movie
          key={movie.id}
          {...movie}
        />
      ))}
    </div>
  );
}

export default Container;
