// for save sort option
export function setCurrentSortOption(sortBy) {
  sessionStorage.setItem('currentSortOption', sortBy);
}

export function getCurrentSortOption() {
  return sessionStorage.getItem('currentSortOption');
}

export function removeCurrentSortOption() {
  sessionStorage.removeItem('currentSortOption');
}

// for paginator
export function setCurrentPageNumber(page) {
  sessionStorage.setItem('currentPageNumber', page);
}

export function getCurrentPageNumber() {
  return +sessionStorage.getItem('currentPageNumber');
}

// export function removeCurrentPageNumber() {
//   sessionStorage.removeItem('currentPageNumber');
// }

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
