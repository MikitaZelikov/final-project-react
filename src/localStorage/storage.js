// for save sort option
export function setCurrentSortOption(sortBy) {
  sessionStorage.setItem('currentSortOption', sortBy);
}

export function getCurrentSortOption() {
  return sessionStorage.getItem('currentSortOption');
}

// for paginator
export function setCurrentPageNumber(page) {
  sessionStorage.setItem('currentPageNumber', page);
}

export function getCurrentPageNumber() {
  return +sessionStorage.getItem('currentPageNumber');
}

// for new users
export function addNewUser(newUser) {
  const newUsers = JSON.parse(getNewUsers());
  newUsers.push(newUser);
  localStorage.setItem('newUsers', JSON.stringify(newUsers));
}

export function getNewUsers() {
  return localStorage.getItem('newUsers');
}

// for current user
export function setCurrentUser(user) {
  sessionStorage.setItem('currentUser', user);
}

export function getCurrentUser() {
  const currentUser = sessionStorage.getItem('currentUser');
  return JSON.parse(currentUser);
}

export function removeCurrentUser() {
  sessionStorage.removeItem('currentUser');
}

// for id voted
export function addVotedMovies(id) {
  const isVoted = getVotedMovies();
  const voted = isVoted || [];
  voted.push(id);
  sessionStorage.setItem('voted', JSON.stringify(voted));
}

export function getVotedMovies() {
  const voted = sessionStorage.getItem('voted');
  return JSON.parse(voted);
}

// for remove movie
export function addIdRemoveMovie(id) {
  const idRemoveMovies = getIdRemoveMovies();
  const isRemoveMovies = idRemoveMovies || [];
  isRemoveMovies.push(id);
  sessionStorage.setItem('deletedMovies', JSON.stringify(isRemoveMovies));
}

export function getIdRemoveMovies() {
  const deletedMovies = sessionStorage.getItem('deletedMovies');
  return JSON.parse(deletedMovies);
}
