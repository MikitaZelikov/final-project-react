const apiKey = 'b1fec506f718f740d5503bd4b1c1c393';
const sortBy = null;

/**
 * @param {number} page Page number
 * @param {string} sortBy Possible value: 'none', 'release_date.asc', 'release_date.desc',
 *  'vote_average.asc', 'vote_average.desc'
*/
export async function discoverMovies(page) {
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=ru-RU&include_adult=false&include_video=false&page=${page}`;
  if (sortBy) {
    url += `&sort_by=${sortBy}`;
  }
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.json();
}

export async function getMovie(idMovie) {
  const url = `https://api.themoviedb.org/3/movie/${idMovie}?api_key=${apiKey}&language=ru-RU&`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.json();
}

export async function getGenres() {
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=ru-RU`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.json();
}
