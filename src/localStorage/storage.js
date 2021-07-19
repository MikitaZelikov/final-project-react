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
  localStorage.setItem('voted', JSON.stringify(voted));
}

export function getVotedMovies() {
  const voted = localStorage.getItem('voted');
  return JSON.parse(voted);
}
