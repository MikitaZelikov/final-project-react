import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './movie.scss';
import logoMovie from '../../../../assets/icon/logoMovie.jpg';
import deleteBtn from '../../../../assets/icon/delete.svg';
import * as storage from '../../../../localStorage/storage';
import { addIdRemoveMovie } from '../../../../store/reducers/moviesReducer';

function Movie(props) {
  const dispatch = useDispatch();

  const {
    poster_path,
    release_date,
    vote_average,
    title,
    id,
    isAuth,
    currentUser,
  } = props;

  let urlPosterMovie = logoMovie;
  if (poster_path) urlPosterMovie = `http://image.tmdb.org/t/p/w342${poster_path}`;

  const handleRemove = () => {
    storage.addIdRemoveMovie(String(id));
    dispatch(addIdRemoveMovie(String(id)));
  };

  return (
    <div className="container__element">
      <p className="container-element__text"><strong>{title}</strong></p>
      <Link to={`/details/${id}`} className="container-element__link">
        <img
          src={urlPosterMovie}
          alt="постер фильма" />
      </Link>
      <p className="container-element__text container-element__text--hover">
        Рейтинг: <strong>{vote_average}</strong>
      </p>
      <p className="container-element__text container-element__text--hover">
        Премьера: <strong>{release_date}</strong>
      </p>
      {isAuth && currentUser.role === 'admin'
        && <Link to="/" className="container-element__remove-link" onClick={handleRemove}>
          <img src={deleteBtn} alt="кнопка удаления фильма" />
        </Link>
      }
    </div>
  );
}

export default Movie;
