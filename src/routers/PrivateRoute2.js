import { Route, Redirect } from 'react-router-dom';

function PrivateRoute2({ isAuth, currentUser, children }) {
  return (
    (isAuth && currentUser.role === 'admin')
      ? <Route>{children}</ Route> : <Redirect to='/not-found-page' />
  );
}

export default PrivateRoute2;
