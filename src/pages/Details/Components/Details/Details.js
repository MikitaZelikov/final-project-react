import './details.scss';
import Profile from '../Profile/Profile';
import Header from '../../../Main/Components/Header/Header';

function Details() {
  return (
    <div>
      <Header />
      <article className="details-wrapper">
        <Profile />
      </article>
    </div>
  );
}

export default Details;
