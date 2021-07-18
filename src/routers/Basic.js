import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PrivateRoute from './PrivateRoute';
import PrivateRoute2 from './PrivateRoute2';
import { loadUsers } from '../store/reducers/usersReducer';
import Main from '../pages/Main/Components/Main/Main';
import Details from '../pages/Details/Components/Details/Details';
import Add from '../pages/Add/Components/Add';
import Edit from '../pages/Edit/Components/Edit';
import SignIn from '../pages/Sign-In/Components/Sign-In';
import SignUp from '../pages/Sign-Up/Components/Sign-Up';
import NotFoundPage from '../pages/Not-Found/Components/Not-Found';

const getIsAuth = (state) => state.usersData.isAuth;
const getCurrentUser = (state) => state.usersData.currentUser;

function Basic() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const isAuth = useSelector(getIsAuth);
  const currentUser = useSelector(getCurrentUser);

  return (
    <Switch>
      <Route path='/' exact>
        <Main
          isAuth={isAuth}
          currentUser={currentUser}
        />
      </Route>

      <Route path='/details/:id' exact>
        <Details
          isAuth={isAuth}
          currentUser={currentUser}
        />
      </Route>

      <PrivateRoute2 path='/add' exact isAuth={isAuth} currentUser={currentUser}>
        <Add
          isAuth={isAuth}
          currentUser={currentUser}
        />
      </PrivateRoute2>

      <Route path='/edit' exact>
        <Edit />
      </Route>

      <PrivateRoute path='/sign-in' exact isAuth={isAuth}>
        <SignIn />
      </PrivateRoute>

      <PrivateRoute path='/sign-up' exact isAuth={isAuth}>
        <SignUp />
      </PrivateRoute>

      <NotFoundPage path='/not-found-page' exact />
    </Switch>
  );
}

export default Basic;
