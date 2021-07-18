import './details.scss';
import Profile from '../Profile/Profile';
import Header from '../../../Main/Components/Header/Header';

function Details({ isAuth, currentUser }) {
  return (
    <div>
      <Header
        isAuth={isAuth}
        currentUser={currentUser}
      />
      <article className="details-wrapper">
        <Profile
          isAuth={isAuth}
          currentUser={currentUser}
        />
      </article>
    </div>
  );
}

export default Details;
