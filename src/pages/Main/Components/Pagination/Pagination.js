import './pagination.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../../../../store/reducers/moviesReducer';
import * as storage from '../../../../localStorage/storage';

import PageBtn from '../Page-Btn/Page-Btn';
import getVirtualPage from './paginator-function';

const getPrevPage = (state) => state.moviesData.page;
const getSortBy = (state) => state.moviesData.sortBy;

function Pagination() {
  const dispatch = useDispatch();

  const statePage = useSelector(getPrevPage);
  const sortBy = useSelector(getSortBy);

  let startPage = 1;
  if (statePage > 5) startPage = 6;
  const finishPage = startPage + 5;
  const visiblePages = [];
  for (startPage; startPage < finishPage; startPage++) {
    visiblePages.push(startPage);
  }

  const handleClickPage = ({ target }) => {
    const activePage = target.textContent;
    const page = getVirtualPage(activePage, statePage);
    storage.setCurrentPageNumber(page);
    dispatch(loadMovies({ page, sortBy }));
  };

  return (
    <ul className="pagination" onClick={handleClickPage}>
      <li className="pagination__element-nav">
        <a className="pagination__link" href="#">first</a>
      </li>
      <li className="pagination__element-nav">
        <a className="pagination__link" href="#">prev</a>
      </li>
      {
        visiblePages.map((page, index) => (
          <PageBtn
            key={index}
            currentPage={page}
            focusPage={statePage}
          />
        ))
      }
      <li className="pagination__element-nav">
        <a className="pagination__link" href="#">next</a>
      </li>
      <li className="pagination__element-nav">
        <a className="pagination__link" href="#">last</a>
      </li>
    </ul>
  );
}

export default Pagination;
