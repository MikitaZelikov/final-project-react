import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import './normalize.scss';
import './index.scss';
// import store from './store/configStore';
import Main from './pages/Main/Components/Main/Main';
// import Details from './pages/Details/Components/Details';
// import Add from './pages/Add/Components/Add';
// import Edit from './pages/Edit/Components/Edit';
// import SignIn from './pages/Sign-In/Components/Sign-In';
// import SignUp from './pages/Sign-Up/Components/Sign-Up';
// import NotFound from './pages/Not-Found/Components/Not-Found';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider> */}
    <Main />
    {/* <Details />
    <Add />
    <Edit />
    <SignIn />
    <SignUp />
    <NotFound /> */}
    {/* </Provider> */}
  </React.StrictMode >,
  document.getElementById('root'),
);
