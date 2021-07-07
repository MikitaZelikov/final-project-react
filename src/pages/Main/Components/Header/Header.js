import './header.scss';

function Header() {
  return (
    <header className="navigation">
      <div className="navigation__home-btn">
        <a className="navigation__link" href="#">
          <img src="/src/assets/icon/homepage.svg" alt="домашняя страница" />
        </a>
      </div>
      <div className="navigation__login-btn">
        <a className="navigation__registration-btn" href="/sign-in.html">Sign in / Sign up</a>
      </div>
    </header>
  );
}

export default Header;
