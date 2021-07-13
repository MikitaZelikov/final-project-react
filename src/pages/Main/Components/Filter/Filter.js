import './filter.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../../../../store/reducers/moviesReducer';
import addBtn from '../../../../assets/icon/add.svg';

const getCurrentPage = (state) => state.moviesData.page;

function Filter() {
  const [activeFilterEl, setActiveFilterEl] = useState('none');
  const dispatch = useDispatch();
  const page = useSelector(getCurrentPage);

  const handleChange = ({ target }) => {
    const sortBy = target.value;
    setActiveFilterEl(sortBy);
    dispatch(loadMovies({ page, sortBy }));
  };

  return (
    <div className="sort-box">
      <form className="sort-form" action="">
        <select
          className="sort-form__select"
          name="sort-select"
          id="sort-select"
          value={activeFilterEl}
          onChange={handleChange}>
          <option className="sort-form__item sort-form__item--none" value="none">
            none
          </option>
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
