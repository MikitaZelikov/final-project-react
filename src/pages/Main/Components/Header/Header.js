import './header.scss';
import homepageBtn from '../../../../assets/icon/homepage.svg';
// import { useEffect } from 'react';

function Header() {
  return (
    <header className="navigation">
      <div className="navigation__home-btn">
        <a className="navigation__link" href="#">
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
