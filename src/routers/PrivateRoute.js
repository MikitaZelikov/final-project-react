import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ isAuth, children }) {
  return (
    // eslint-disable-next-line no-unused-expressions
    isAuth ? <Redirect to='/' /> : <Route>{children}</ Route>);
}

export default PrivateRoute;
