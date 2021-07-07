import './movie.scss';
import logoMovie from '../../../../assets/icon/logoMovie.jpg';
import deleteBtn from '../../../../assets/icon/delete.svg';

function Movie() {
  return (
    <div className="container__element">
      <p className="container-element__text"><strong>Title</strong></p>
      <a href="#" className="container-element__link">
        <img
          src={logoMovie}
          alt="фото кинопленки" />
      </a>
      <p className="container-element__text">rating: <strong>8.2</strong></p>
      <p className="container-element__text">release: <strong>2021-03-24</strong></p>
      <a className="container-element__remove-link" href="#">
        <img src={deleteBtn} alt="кнопка удаления фильма" />
      </a>
    </div>
  );
}

export default Movie;
