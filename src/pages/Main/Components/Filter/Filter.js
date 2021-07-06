import './filter.scss';

function Filter() {
  return (
    <div class="sort-box">
      <form class="sort-form" action="">
        <select class="sort-form__select" name="sort-select" id="sort-select">
          <option class="sort-form__item sort-form__item--none" value="">none</option>
          <option class="sort-form__item sort-form__item--rating-asc" value="vote_average.asc">rating asc</option>
          <option class="sort-form__item sort-form__item--rating-desc" value="vote_average.desc">rating desc</option>
          <option class="sort-form__item sort-form__item--release-asc" value="release_date.asc">release date asc</option>
          <option class="sort-form__item sort-form__item--release-desc" value="release_date.desc">release date desc</option>
        </select>
      </form>
      <a class="add-movie-link" href="/add.html">
        <img />
      </a>
    </div>
  );
}

export default Filter;
