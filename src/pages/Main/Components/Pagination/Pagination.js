import './pagination.scss';

function Pagination() {
  return (
    <ul className="pagination">
      <li className="pagination__element-nav">
        <a className="pagination__link" href="#">first</a>
      </li>
      <li className="pagination__element-nav">
        <a className="pagination__link" href="#">prev</a>
      </li>
      <li className="pagination__element pagination__element--focus">
        <a className="pagination__link" href="#" data-page-id="1">1</a>
      </li>
      <li className="pagination__element">
        <a className="pagination__link" href="#" data-page-id="2">2</a>
      </li>
      <li className="pagination__element">
        <a className="pagination__link" href="#" data-page-id="3">3</a>
      </li>
      <li className="pagination__element">
        <a className="pagination__link" href="#" data-page-id="4">4</a>
      </li>
      <li className="pagination__element">
        <a className="pagination__link" href="#" data-page-id="5">5</a>
      </li>
      <li className="pagination__element pagination__element--hidden">
        <a className="pagination__link" href="#" data-page-id="6">6</a>
      </li>
      <li className="pagination__element pagination__element--hidden">
        <a className="pagination__link" href="#" data-page-id="7">7</a>
      </li>
      <li className="pagination__element pagination__element--hidden">
        <a className="pagination__link" href="#" data-page-id="8">8</a>
      </li>
      <li className="pagination__element pagination__element--hidden">
        <a className="pagination__link" href="#" data-page-id="9">9</a>
      </li>
      <li className="pagination__element pagination__element--hidden">
        <a className="pagination__link" href="#" data-page-id="10">10</a>
      </li>
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
