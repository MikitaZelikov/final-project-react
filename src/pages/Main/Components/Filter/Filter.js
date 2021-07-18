import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './filter.scss';
import { loadMovies } from '../../../../store/reducers/moviesReducer';
import addBtn from '../../../../assets/icon/add.svg';
import * as storage from '../../../../localStorage/storage';

const getCurrentPage = (state) => state.moviesData.page;
const getCurrentSort = (state) => state.moviesData.sortBy;

function Filter({ isAuth, currentUser }) {
  const dispatch = useDispatch();
  const page = useSelector(getCurrentPage);
  const currentSort = useSelector(getCurrentSort);

  const handleChange = ({ target }) => {
    const sortBy = target.value;
    storage.setCurrentSortOption(sortBy);
    dispatch(loadMovies({ page, sortBy }));
  };

  return (
    <div className="sort-box">
      <form className="sort-form" action="">
        <select
          className="sort-form__select"
          name="sort-select"
          id="sort-select"
          value={currentSort}
          onChange={handleChange}>
          <option className="sort-form__item sort-form__item--none" value="">
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
      {isAuth && currentUser.role === 'admin'
        && <Link className="add-movie-link" to="/add">
          <img src={addBtn} alt="кнопка добавления фильма" />
        </Link>
      }
    </div>
  );
}

export default Filter;
