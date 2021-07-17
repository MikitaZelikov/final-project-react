import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { loadUsers } from '../store/reducers/usersReducer';
import * as auth from '../auth/auth-user';
import Main from '../pages/Main/Components/Main/Main';
import Details from '../pages/Details/Components/Details/Details';
// import Add from './pages/Add/Components/Add';
// import Edit from './pages/Edit/Components/Edit';
import SignIn from '../pages/Sign-In/Components/Sign-In';
import SignUp from '../pages/Sign-Up/Components/Sign-Up';
// import NotFoundPage from '../pages/Not-Found/Components/Not-Found';

const getDummyUsers = (state) => state.usersData.dummyUsers;

function Basic() {
  const dispatch = useDispatch();

  const stateUsers = useSelector(getDummyUsers);
  auth.mergeUsers(stateUsers);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

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
      <Route path='/sign-in' exact>
        <SignIn />
      </Route>
      <Route path='/sign-up' exact>
        <SignUp />
      </Route>
      {/* <NotFoundPage /> */}
    </Switch>
  );
}

export default Basic;
