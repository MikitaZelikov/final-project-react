import './header.scss';
import { Link } from 'react-router-dom';
import homepageBtn from '../../../../assets/icon/homepage.svg';

function Header() {
  return (
    <header className="navigation">
      <div className="navigation__home-btn">
        <Link className="navigation__link" to="/">
          <img src={homepageBtn} alt="домашняя страница" />
        </Link>
      </div>
      <div className="navigation__login-btn">
        <a className="navigation__registration-btn" href="#">Sign in / Sign up</a>
      </div>
    </header>
  );
}

export default Header;
