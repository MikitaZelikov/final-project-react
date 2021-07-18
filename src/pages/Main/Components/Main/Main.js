import './main.scss';
import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import Container from '../Container/Container';
import Pagination from '../Pagination/Pagination';

function Main({ isAuth, currentUser }) {
  return (
    <div>
      <Header
        isAuth={isAuth}
        currentUser={currentUser}
      />
      <div className="content">
        <Filter
          isAuth={isAuth}
          currentUser={currentUser}
        />
        <Container
          isAuth={isAuth}
          currentUser={currentUser}
        />
        <Pagination />
      </div>
    </div>
  );
}

export default Main;
