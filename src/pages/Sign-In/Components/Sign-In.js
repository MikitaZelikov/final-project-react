import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';

import './sign-in.scss';
import Header from '../../Main/Components/Header/Header';
import * as auth from '../../../auth/auth-user';

// const getDummyUsers = (state) => state.usersData.dummyUsers;

function SignIn() {
  const SignInSchema = yup.object().shape({
    email: yup
      .string()
      .email('введите верный email')
      .required('это поле обязательное'),
    password: yup
      .string()
      .typeError('должно быть строкой')
      .required('это поле обязательное'),
  });

  // const stateUsers = useSelector(getDummyUsers);
  const [isAuth, setIsAuth] = useState(false);

  return isAuth ? (<Redirect to='/' />) : (
    <div>
      <Header />
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnBlur
        onSubmit={(formData) => {
          const result = auth.verificationUser(formData);
          if (result.success) {
            setIsAuth(result.success);
            // eslint-disable-next-line no-alert
            alert(result.text);
          } else {
            // eslint-disable-next-line no-alert
            alert(result.text);
          }
        }}
        validationSchema={SignInSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <form className="sign-in-form" action="#" onSubmit={handleSubmit}>
            <p className="sign-in-form__title">Sign In</p>
            <div>
              <label htmlFor="email">Email:</label>
              <div className="sign-up-form__box-input">
                <input
                  className="sign-in-form__input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  name="email"
                  type="email"
                  placeholder="email"
                  id="email"
                />
                {touched.email && errors.email
                  && <span className="sign-up-form__validation-mess">
                    {errors.email}
                  </span>}
              </div>
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <div className="sign-up-form__box-input">
                <input
                  className="sign-in-form__input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                />
                {touched.password && errors.password
                  && <span className="sign-up-form__validation-mess">
                    {errors.password}
                  </span>}
              </div>
            </div>
            <div className="sign-in-form__box-btn">
              <input
                className="sign-in-form__submit-btn"
                type="submit"
                value="Sign in"
                disabled={!isValid || !dirty}
              />
              <Link to="/sign-up">Sign up</Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default SignIn;
