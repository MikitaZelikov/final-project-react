import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import store from '../store/configStore';

import '../normalize.scss';
import Main from '../pages/Main/Components/Main/Main';
import Details from '../pages/Details/Components/Details/Details';
// import Add from './pages/Add/Components/Add';
// import Edit from './pages/Edit/Components/Edit';
import SignIn from '../pages/Sign-In/Components/Sign-In';
import SignUp from '../pages/Sign-Up/Components/Sign-Up';
// import NotFound from './pages/Not-Found/Components/Not-Found';

function Routers() {
  return (
    <Provider store={store}>
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
        {/* <Route path='/not-found' exact>
          <NotFoudPage />
        </Route> */}
      </Switch>
    </Provider>
  );
}

export default Routers;
