import './main.scss';
import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import Container from '../Container/Container';
import Pagination from '../Pagination/Pagination';

function Main() {
  return (
    <div>
      <Header />
      <div className="content">
        <Filter />
        <Container />
        <Pagination />
      </div>
    </div>
  );
}

export default Main;
