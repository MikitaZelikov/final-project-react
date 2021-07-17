import * as storage from '../localStorage/storage';

const apiKey = 'b1fec506f718f740d5503bd4b1c1c393';

/**
 * @param {number} page Page number
 * @param {string} sortBy Possible value: 'none', 'release_date.asc', 'release_date.desc',
 *  'vote_average.asc', 'vote_average.desc'
*/
export async function discoverMovies(page, sortBy) {
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

export async function getMergeUsers() {
  const response = await fetch('/users.json');
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  const dummyUsers = await response.json();
  const storageUsers = storage.getNewUsers();
  if (!storageUsers) localStorage.setItem('newUsers', JSON.stringify([]));
  const isUsers = storageUsers ? JSON.parse(storageUsers) : [];
  isUsers.push(...dummyUsers);
  // eslint-disable-next-line no-console
  console.log(isUsers);
  return isUsers;
}
