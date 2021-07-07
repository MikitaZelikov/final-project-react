import './filter.scss';
import addBtn from '../../../../assets/icon/add.svg';

function Filter() {
  return (
    <div className="sort-box">
      <form className="sort-form" action="">
        <select className="sort-form__select" name="sort-select" id="sort-select">
          <option className="sort-form__item sort-form__item--none" value="">none</option>
          <option className="sort-form__item sort-form__item--rating-asc" value="vote_average.asc">
            rating asc
          </option>
          <option
            className="sort-form__item sort-form__item--rating-desc"
            value="vote_average.desc">
            rating desc
          </option>
          <option
            className="sort-form__item sort-form__item--release-asc"
            value="release_date.asc">
            release date asc
          </option>
          <option
            className="sort-form__item sort-form__item--release-desc"
            value="release_date.desc">
            release date desc
          </option>
        </select>
      </form>
      <a className="add-movie-link" href="#">
        <img src={addBtn} alt="кнопка добавления фильма" />
      </a>
    </div>
  );
}

export default Filter;
