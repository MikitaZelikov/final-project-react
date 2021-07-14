import './header.scss';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import homepageBtn from '../../../../assets/icon/homepage.svg';
import * as storage from '../../../../localStorage/storage';
import { loadMovies } from '../../../../store/reducers/moviesReducer';

function Header() {
  const dispatch = useDispatch();

  const handleClickHome = () => {
    storage.removeCurrentPageNumber();
    storage.removeCurrentSortOption();
    dispatch(loadMovies(1, ''));
  };

  return (
    <header className="navigation">
      <div className="navigation__home-btn">
        <Link className="navigation__link" to="/" onClick={handleClickHome}>
          <img src={homepageBtn} alt="домашняя страница" />
        </Link>
      </div>
      {!window.location.pathname.includes('/sign')
        && <div className="navigation__login-btn">
          <Link className="navigation__registration-btn" to="/sign-in">
            Sign in / Sign up
          </Link>
        </div>}
    </header>
  );
}

export default Header;
