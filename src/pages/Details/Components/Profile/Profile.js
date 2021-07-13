import './profile.scss';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import poster from '../../../../assets/icon/logoMovie.jpg';
import iconEdit from '../../../../assets/icon/edit.svg';
import iconDel from '../../../../assets/icon/delete.svg';
import * as galleryApi from '../../../../api/gallery-api';

function Profile() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [movie, setObjMovie] = useState({ data: {}, posterPath: '', movieGenres: '' });

  useEffect(async () => {
    const currentMovie = await galleryApi.getMovie(id);
    const posterPath = currentMovie.poster_path ? `http://image.tmdb.org/t/p/w342${currentMovie.poster_path}` : poster;
    const movieGenres = currentMovie.genres.reduce((prev, curr) => `${prev} ${curr.name} /`, '/');
    setObjMovie({
      data: currentMovie,
      posterPath,
      movieGenres,
    });
  }, [dispatch]);

  return movie ? (
    <figure className="details-container">
      <div className="poster-box">
        <img className="poster-box__img" src={movie.posterPath} alt="movie poster" />
        <form className="poster-box__form-vote" action="#">
          <label for="vote-select">Мой рейтинг:</label>
          <select className="form-vote__select" name="vote-select" id="vote-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <input className="form-vote__button" type="submit" value="Ok" />
        </form>
      </div>
      <figcaption className="description-box">
        <p className="description-box__title">{movie.data.title}</p>
        <p className="description-box__genres">{movie.movieGenres}</p>
        <p className="description-box__overview">{`Обзор: ${movie.data.overview}`}</p>
        <p className="description-box__popularity">{`Популярность: ${movie.data.popularity}`}</p>
        <p className="description-box__release">{`Мировая премьера: ${movie.data.release_date}`}</p>
        <p className="description-box__vote-count">{`Число голосов: ${movie.data.vote_count}`}</p>
        <p className="description-box__vote-average">{`Рейтинг: ${movie.data.vote_average}`}</p>
      </figcaption>
      <div className="edit-box">
        <span className="edit-box__correction">
          <a href="#" className="edit-box__link">
            <img className="edit-box__icon" src={iconEdit} alt="иконка править" />
          </a>
        </span>
        <span className="edit-box__delete">
          <a href="#" className="edit-box__link">
            <img className="edit-box__icon" src={iconDel} alt="иконка удалить" />
          </a>
        </span>
      </div>
    </figure>
  ) : null;
}

export default Profile;
