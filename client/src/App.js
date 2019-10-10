import React, { Fragment, } from 'react';
import Home from './components/shared/Landing';
import NoMatch from './components/shared/Nomatch';
import FetchUser from './components/auth/FetchUser';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Switch, Route, } from 'react-router-dom';
import AdminHome from './components/admin/AdminHome';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Calendar from './components/calendar/Calendar';
import Navbar from './components/shared/Navbar';
// import About from './components/shared/About';

const App = () => (
  // if the screen size changes show this:
  <Fragment>
    <Navbar />
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/calendar" component={Calendar} />
        <FetchUser>
          <ProtectedRoute exact path="/admin_home" component={AdminHome} />
        </FetchUser>
        <Route component={NoMatch} />
      </Switch>
      </>
  </Fragment>
);

export default App;
