import './sign-in.scss';
import { Link } from 'react-router-dom';
import Header from '../../Main/Components/Header/Header';

function SignIn() {
  return (
    <div>
      <Header />
      <form className="sign-in-form" action="#">
        <p className="sign-in-form__title">Sign In</p>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            className="sign-in-form__input"
            type="email"
            id="email"
            name="email"
            placeholder="email"
            required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            className="sign-in-form__input"
            type="password"
            id="password"
            name="password"
            placeholder="password"
            required />
        </div>
        <div className="sign-in-form__box-btn">
          <input className="sign-in-form__submit-btn" type="submit" value="Sign in" />
          <Link to="/sign-up">Sign up</Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
