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

export function removeCurrentPageNumber() {
  sessionStorage.removeItem('currentPageNumber');
}
