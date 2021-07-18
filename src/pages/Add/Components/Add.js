import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';

import './add.scss';
import Header from '../../Main/Components/Header/Header';

function Add(rest) {
  const AddSchema = yup.object().shape({
    title: yup
      .string()
      .typeError('должно быть строкой')
      .min(3, 'поле содержит менее 3 символов')
      .required('это поле обязательное'),
    overview: yup
      .string()
      .typeError('должно быть строкой')
      .min(6, 'поле содержит менее 6 символов')
      .max(150, 'поле содержит более 150 символов')
      .required('это поле обязательное'),
    posterPath: yup
      .string()
      .typeError('должно быть строкой')
      .required('это поле обязательное'),
    popularity: yup
      .number()
      .typeError('должно быть числом')
      // .round(3)
      .positive('число должно быть положительное')
      .required('это поле обязательное'),
    releaseDate: yup
      .date()
      .required('это поле обязательное'),
    genres: yup
      .string()
      .required('это поле обязательное'),
    voteAverage: yup
      .number()
      .typeError('должно быть числом')
      .max(10, 'число не более 10')
      // .round(1)
      .required('это поле обязательное'),
    voteCount: yup
      .number()
      .typeError('должно быть числом')
      .integer('число должно быть целое')
      .positive('число должно быть положительное')
      .required('это поле обязательное'),
  });

  return (
    <div>
      <Header {...rest} />
      <Formik
        initialValues={{
          title: '',
          overview: '',
          posterPath: '',
          popularity: '',
          releaseDate: '',
          genres: '',
          voteAverage: '',
          voteCount: '',

        }}
        validateOnBlur
        onSubmit={(formData) => {
          // eslint-disable-next-line no-console
          console.log(formData);
        }}
        validationSchema={AddSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          // handleSubmit,
          dirty,
        }) => (
          <form className="add-movie-form" method="POST" action="#">

            <div>
              <label htmlFor="title">Title:</label>
              <div className="add-movie-form__box-input">
                <input
                  className="add-movie-form__input"
                  type="text"
                  id="title"
                  name="title"
                  placeholder="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                {touched.title && errors.title && (
                  <span className="sign-up-form__validation-mess">
                    {errors.title}
                  </span>)}
              </div>
            </div>

            <div>
              <label htmlFor="overview">Overview:</label>
              <div className="add-movie-form__box-input">
                <textarea
                  className="add-movie-form__input"
                  id="overview"
                  name="overview"
                  rows="5"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.overview}
                >
                </textarea>
                {touched.overview && errors.overview && (
                  <span className="sign-up-form__validation-mess">
                    {errors.overview}
                  </span>)}
              </div>
            </div>

            <div>
              <label htmlFor="posterPath">Poster-path:</label>
              <div className="add-movie-form__box-input">
                <input
                  className="add-movie-form__input"
                  type="text"
                  id="posterPath"
                  name="posterPath"
                  placeholder="poster-path"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.posterPath}
                />
                {touched.posterPath && errors.posterPath && (
                  <span className="sign-up-form__validation-mess">
                    {errors.posterPath}
                  </span>)}
              </div>
            </div>

            <div>
              <label htmlFor="popularity">Popularity:</label>
              <div className="add-movie-form__box-input">
                <input
                  className="add-movie-form__input"
                  type="number"
                  id="popularity"
                  name="popularity"
                  placeholder="popularity"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.popularity}
                />
                {touched.popularity && errors.popularity && (
                  <span className="sign-up-form__validation-mess">
                    {errors.popularity}
                  </span>)}
              </div>
            </div>

            <div>
              <label htmlFor="releaseDate">Release-date:</label>
              <div className="add-movie-form__box-input">
                <input
                  className="add-movie-form__input"
                  type="date"
                  id="releaseDate"
                  name="releaseDate"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.releaseDate}
                />
                {touched.releaseDate && errors.releaseDate && (
                  <span className="sign-up-form__validation-mess">
                    {errors.releaseDate}
                  </span>)}
              </div>
            </div>

            <div>
              <label htmlFor="genres">Genres:</label>
              <div className="add-movie-form__box-input">
                <select
                  className="add-movie-form__input genres-select"
                  name="genres"
                  id="genres"
                  // multiple size="5"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.genres}
                >
                  <option>genre-name</option>
                </select>
                {touched.genres && errors.genres && (
                  <span className="sign-up-form__validation-mess">
                    {errors.genres}
                  </span>)}
              </div>
            </div>

            <div>
              <label htmlFor="voteAverage">Vote-average:</label>
              <div className="add-movie-form__box-input">
                <input
                  className="add-movie-form__input"
                  type="number"
                  // step="0.1"
                  // min="0"
                  // max="10"
                  id="voteAverage"
                  name="voteAverage"
                  placeholder="vote-average"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.voteAverage}
                />
                {touched.voteAverage && errors.voteAverage && (
                  <span className="sign-up-form__validation-mess">
                    {errors.voteAverage}
                  </span>)}
              </div>
            </div>

            <div>
              <label htmlFor="voteCount">Vote-count:</label>
              <div className="add-movie-form__box-input">
                <input
                  className="add-movie-form__input"
                  type="number"
                  id="voteCount"
                  name="voteCount"
                  placeholder="vote-count"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.voteCount}
                />
                {touched.voteCount && errors.voteCount && (
                  <span className="sign-up-form__validation-mess">
                    {errors.voteCount}
                  </span>)}
              </div>
            </div>

            <div className="add-movie-form__checkbox">
              <input
                className="add-movie-form__input"
                type="checkbox"
                id="adult"
                name="adult"
                onChange={handleChange}
                value={values.adult}
              />
              <label htmlFor="adult">Adult</label>
            </div>

            <div className="add-movie-form__box-btn">
              <input
                className="add-movie-form__add-btn"
                type="submit"
                value="Add"
                disabled={!isValid || !dirty}
              />
              <Link className="add-movie-form__clear-btn" to="#">
                Clear
              </Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Add;
