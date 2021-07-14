import './sign-up.scss';
import { Link } from 'react-router-dom';
import Header from '../../Main/Components/Header/Header';

function SignUp() {
  return (
    <div>
      <Header />
      <form className="sign-up-form" action="#">
        <p className="sign-up-form__title">Sign Up</p>

        <div className="sign-up-form__box-data">
          <label htmlFor="email">Email:</label>
          <div className="sign-up-form__box-input">
            <input
              className="sign-up-form__input"
              type="email"
              id="email"
              name="email"
              placeholder="email"
              required />
            <span className="sign-up-form__validation-mess"></span>
          </div>
        </div>

        <div className="sign-up-form__box-data">
          <label htmlFor="name">Name:</label>
          <div className="sign-up-form__box-input">
            <input
              className="sign-up-form__input"
              type="text"
              id="name"
              name="name"
              placeholder="name"
              required />
            <span className="sign-up-form__validation-mess"></span>
          </div>
        </div>

        <div className="sign-up-form__box-data">
          <label htmlFor="surname">Surname:</label>
          <div className="sign-up-form__box-input">
            <input
              className="sign-up-form__input"
              type="text"
              id="surname"
              name="surname"
              placeholder="surname"
              required />
            <span className="sign-up-form__validation-mess"></span>
          </div>
        </div>

        <div className="sign-up-form__box-data">
          <label htmlFor="password">Password:</label>
          <div className="sign-up-form__box-input">
            <input
              className="sign-up-form__input"
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required />
            <span className="sign-up-form__validation-mess"></span>
          </div>
        </div>

        <div className="sign-up-form__box-data">
          <label htmlFor="confirm-password">Confirm password:</label>
          <div className="sign-up-form__box-input">
            <input
              className="sign-up-form__input"
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm password"
              required />
            <span className="sign-up-form__validation-mess"></span>
          </div>
        </div>

        <div className="sign-up-form__box-btn">
          <input
            className="sign-up-form__submit-btn"
            type="submit"
            value="Sign up" />
          <Link to="/sign-in">Sign in</Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
