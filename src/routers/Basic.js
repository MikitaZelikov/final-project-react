import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PrivateRoute from './PrivateRoute';
import { loadUsers } from '../store/reducers/usersReducer';
import Main from '../pages/Main/Components/Main/Main';
import Details from '../pages/Details/Components/Details/Details';
// import Add from './pages/Add/Components/Add';
// import Edit from './pages/Edit/Components/Edit';
import SignIn from '../pages/Sign-In/Components/Sign-In';
import SignUp from '../pages/Sign-Up/Components/Sign-Up';
// import NotFoundPage from '../pages/Not-Found/Components/Not-Found';

const getIsAuth = (state) => state.usersData.isAuth;

function Basic() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const isAuth = useSelector(getIsAuth);

  return (
    <Switch>
      <Route path='/' exact>
        <Main />
      </Route>
      <Route path='/details/:id' exact>
        <Details />
      </Route>
      {/* <Route path='/add' exact>
        <Add />
        </Route>
        <Route path='/edit' exact>
        <Edit />
      </Route> */}
      <PrivateRoute path='/sign-in' exact isAuth={isAuth}>
        <SignIn />
      </PrivateRoute>
      <PrivateRoute path='/sign-up' exact isAuth={isAuth}>
        <SignUp />
      </PrivateRoute>
      {/* <NotFoundPage /> */}
    </Switch>
  );
}

export default Basic;
