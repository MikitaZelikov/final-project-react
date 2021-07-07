import './main.scss';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import Filter from '../Filter/Filter';
import Container from '../Container/Container';
import Pagination from '../Pagination/Pagination';

function Main() {
  return (
    <body>
      <Header />
      <div className="content">
        <Loader />
        <Filter />
        <Container />
        <Pagination />
      </div>
    </body>
  );
}

export default Main;
