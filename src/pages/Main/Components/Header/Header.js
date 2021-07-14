import './header.scss';
import { useDispatch } from 'react-redux';
import homepageBtn from '../../../../assets/icon/homepage.svg';
import * as storage from '../../../../localStorage/storage';
import { loadMovies } from '../../../../store/reducers/moviesReducer';

function Header() {
  const dispatch = useDispatch();

  const handleClickHome = () => {
    storage.removeCurrentPageNumber();
    storage.removeCurrentSortOption();
    dispatch(loadMovies(1, null));
  };

  return (
    <header className="navigation">
      <div className="navigation__home-btn">
        <a className="navigation__link" href="/" onClick={handleClickHome}>
          <img src={homepageBtn} alt="домашняя страница" />
        </a>
      </div>
      <div className="navigation__login-btn">
        <a className="navigation__registration-btn" href="#">Sign in / Sign up</a>
      </div>
    </header>
  );
}

export default Header;
