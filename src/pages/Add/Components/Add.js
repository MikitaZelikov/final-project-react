import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
// eslint-disable-next-line import/no-extraneous-dependencies
import { nanoid } from 'nanoid';

import './add.scss';
import Header from '../../Main/Components/Header/Header';
import Genre from './Genre';
import * as storage from '../../../localStorage/storage';
import { loadGenres } from '../../../store/reducers/genresReducer';
import { addMovie } from '../../../store/reducers/moviesReducer';

const getGenresState = (state) => state.genresData.genres;

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
    poster_path: yup
      .string()
      .typeError('должно быть строкой')
      .required('это поле обязательное'),
    popularity: yup
      .number()
      .typeError('должно быть числом')
      .positive('число должно быть положительное')
      .required('это поле обязательное'),
    release_date: yup
      .date()
      .required('это поле обязательное'),
    genres: yup
      .array()
      .min(1, 'выберите жанр фильма')
      .required('это поле обязательное'),
    vote_average: yup
      .number()
      .typeError('должно быть числом')
      .positive('число должно быть положительное')
      .max(10, 'число не более 10')
      .required('это поле обязательное'),
    vote_сount: yup
      .number()
      .typeError('должно быть числом')
      .integer('число должно быть целое')
      .positive('число должно быть положительное')
      .required('это поле обязательное'),
  });
  const dispatch = useDispatch();
  const genresState = useSelector(getGenresState);

  useEffect(() => {
    dispatch(loadGenres());
  }, [dispatch]);

  return (
    <div>
      <Header {...rest} />
      <Formik
        initialValues={{
          title: '',
          overview: '',
          poster_path: '',
          popularity: '',
          release_date: '',
          genres: '',
          vote_average: '',
          vote_сount: '',
          adult: '',
        }}
        validateOnBlur
        onSubmit={(formData) => {
          const dataForm = { ...formData };
          dataForm.id = nanoid(6);
          storage.addMovie(dataForm);
          dispatch(addMovie(dataForm));
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
          handleSubmit,
          dirty,
          resetForm,
        }) => (
          <form
            className="add-movie-form"
            method="POST"
            action="#"
            onSubmit={handleSubmit}>
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
                  name="poster_path"
                  placeholder="poster-path"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.poster_path}
                />
                {touched.poster_path && errors.poster_path && (
                  <span className="sign-up-form__validation-mess">
                    {errors.poster_path}
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
                  name="release_date"
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
                  multiple
                  onChange={handleChange}
                  onBlur={handleBlur}
                // value={state?.value}
                >
                  {genresState?.map((genre, idx) => <Genre key={idx} name={genre.name} />)}
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
                  id="voteAverage"
                  name="vote_average"
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
                  name="vote_сount"
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
              <Link
                className="add-movie-form__clear-btn"
                to="#"
                onClick={resetForm}
              >
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
