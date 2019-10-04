import React, { Fragment, } from 'react';
import Home from './components/shared/Landing';
import Nomatch from './components/shared/Nomatch';
import FetchUser from './components/auth/FetchUser';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import AdminHome from './components/admin/AdminHome';
import ProtectedRoute from './components/auth/ProtectedRoute';

const App = () => (

  // if the screen size changes show this: 
  <Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/admin" component={Login} />
      <Route exact path="/register" component={Register} />
      <FetchUser>
        <ProtectedRoute exact path="/admin_home" component={AdminHome} />
      </FetchUser>
      <Route component={Nomatch} />
    </Switch>

  </Fragment>

  // otherwise show this.
)

export default App;