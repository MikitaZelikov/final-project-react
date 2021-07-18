import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ isAuth, children }) {
  return (
    isAuth ? <Redirect to='/' /> : <Route>{children}</ Route>
  );
}

export default PrivateRoute;
