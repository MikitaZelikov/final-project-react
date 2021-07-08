import './movie.scss';
import logoMovie from '../../../../assets/icon/logoMovie.jpg';
import deleteBtn from '../../../../assets/icon/delete.svg';

function Movie(props) {
  const {
    poster_path: posterPath,
    release_date: releaseDate,
    title,
    vote_average: voteAverage,
    // ...rest,
  } = props;

  let urlPosterMovie = logoMovie;
  if (posterPath) urlPosterMovie = `http://image.tmdb.org/t/p/w342${posterPath}`;

  return (
    <div className="container__element">
      <p className="container-element__text"><strong>{title}</strong></p>
      <a href="#" className="container-element__link">
        <img
          src={urlPosterMovie}
          alt="фото кинопленки" />
      </a>
      <p className="container-element__text container-element__text--hover">
        Рейтинг: <strong>{voteAverage}</strong>
      </p>
      <p className="container-element__text container-element__text--hover">
        Премьера: <strong>{releaseDate}</strong>
      </p>
      <a className="container-element__remove-link" href="#">
        <img src={deleteBtn} alt="кнопка удаления фильма" />
      </a>
    </div>
  );
}

export default Movie;
