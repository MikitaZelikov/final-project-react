import './page-btn.scss';

function PageBtn(props) {
  const { currentPage, focusPage } = props;

  let paginationEl = 'pagination__element';
  if (focusPage === currentPage) paginationEl += ' pagination__element--focus';

  return (
    <li className={paginationEl}>
      <a className="pagination__link" href="#" data-page-id={currentPage}>{currentPage}</a>
    </li>
  );
}

export default PageBtn;
