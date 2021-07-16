import './sign-up.scss';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';

import Header from '../../Main/Components/Header/Header';

function SignUp() {
  const SignUpSchema = yup.object().shape({
    email: yup
      .string()
      .email('введите верный email')
      .required('это поле обязательное'),
    name: yup
      .string()
      .min(7, 'поле содержит менее 7 символов')
      .required('это поле обязательное'),
    surname: yup
      .string()
      .min(7, 'поле содержит менее 7 символов')
      .required('это поле обязательное'),
    password: yup
      .string()
      .min(7, 'поле содержит менее 7 символов')
      .typeError('должно быть строкой')
      .required('это поле обязательное'),
    confirmPassword: yup
      .string()
      .min(7, 'поле содержит менее 7 символов')
      .typeError('должно быть строкой')
      .oneOf([yup.ref('password')], 'пароли не совпадают')
      .required('это поле обязательное'),
  });

  return (
    <div>
      <Header />
      <Formik
        initialValues={{
          email: '',
          name: '',
          surname: '',
          password: '',
          confirmPassword: '',
        }}
        validateOnBlur
        onSubmit={(data) => {
          // eslint-disable-next-line no-console
          console.log(data);
        }}
        validationSchema={SignUpSchema}
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
          <form className="sign-up-form" action="#" onSubmit={handleSubmit}>
            <p className="sign-up-form__title">Sign Up</p>

            <div className="sign-up-form__box-data">
              <label htmlFor="email">Email:</label>
              <div className="sign-up-form__box-input">
                <input
                  className="sign-up-form__input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                />
                {touched.email && errors.email
                  && <span className="sign-up-form__validation-mess">
                    {errors.email}
                  </span>}
              </div>
            </div>

            <div className="sign-up-form__box-data">
              <label htmlFor="name">Name:</label>
              <div className="sign-up-form__box-input">
                <input
                  className="sign-up-form__input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="name"
                />
                {touched.name && errors.name
                  && <span className="sign-up-form__validation-mess">
                    {errors.name}
                  </span>}
              </div>
            </div>

            <div className="sign-up-form__box-data">
              <label htmlFor="surname">Surname:</label>
              <div className="sign-up-form__box-input">
                <input
                  className="sign-up-form__input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.surname}
                  type="text"
                  id="surname"
                  name="surname"
                  placeholder="surname"
                />
                {touched.surname && errors.surname
                  && <span className="sign-up-form__validation-mess">
                    {errors.surname}
                  </span>}
              </div>
            </div>

            <div className="sign-up-form__box-data">
              <label htmlFor="password">Password:</label>
              <div className="sign-up-form__box-input">
                <input
                  className="sign-up-form__input"
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

            <div className="sign-up-form__box-data">
              <label htmlFor="confirmPassword">Confirm password:</label>
              <div className="sign-up-form__box-input">
                <input
                  className="sign-up-form__input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm password"
                />
                {touched.confirmPassword && errors.confirmPassword
                  && <span className="sign-up-form__validation-mess">
                    {errors.confirmPassword}
                  </span>}
              </div>
            </div>

            <div className="sign-up-form__box-btn">
              <input
                className="sign-up-form__submit-btn"
                type="submit"
                value="Sign up"
                disabled={!isValid || !dirty}
              />
              <Link to="/sign-in">Sign in</Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;
