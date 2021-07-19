import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './header.scss';
import homepageBtn from '../../../../assets/icon/homepage.svg';
import * as storage from '../../../../localStorage/storage';
import { resetValue } from '../../../../store/reducers/moviesReducer';
import { logOut } from '../../../../store/reducers/usersReducer';

function Header({ isAuth, currentUser }) {
  const dispatch = useDispatch();

  const handleClickHome = () => {
    storage.setCurrentPageNumber(1);
    storage.setCurrentSortOption('');
    dispatch(resetValue());
  };

  const handleClickLogOut = () => {
    storage.removeCurrentUser();
    dispatch(logOut());
  };

  return (
    <header className="navigation">
      <div className="navigation__home-btn">
        <a href="/" className="navigation__link" onClick={handleClickHome}>
          <img src={homepageBtn} alt="домашняя страница" />
        </a>
      </div>
      {!window.location.pathname.includes('/sign') && (
        <div className="navigation__login-btn">
          {isAuth && <span>{currentUser.name}</span>}
          <Link
            className="navigation__registration-btn"
            to={isAuth ? '#' : '/sign-in'}
            onClick={isAuth ? handleClickLogOut : ''}
          >
            {isAuth ? 'Log out' : 'Sign in / Sign up'}
          </Link>
        </div>)}
    </header>
  );
}

export default Header;
