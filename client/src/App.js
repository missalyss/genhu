<<<<<<< HEAD
import React, { Fragment, } from 'react';
import Home from './components/shared/Landing';
import Nomatch from './components/shared/Nomatch';
import FetchUser from './components/auth/FetchUser';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Switch, Route, } from 'react-router-dom';
import AdminHome from './components/admin/AdminHome';
import ProtectedRoute from './components/auth/ProtectedRoute';
// import About from './components/shared/About';
=======
import React, { Fragment } from "react";
import Home from "./components/shared/Landing";
import Nomatch from "./components/shared/Nomatch";
import FetchUser from "./components/auth/FetchUser";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Switch, Route } from "react-router-dom";
import AdminHome from "./components/admin/AdminHome";
import ProtectedRoute from "./components/auth/ProtectedRoute";
>>>>>>> 338fe5da7a985c7841072cd138d8b9b9d2cfd545

const App = () => (
  // if the screen size changes show this:
  <Fragment>
<<<<<<< HEAD
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Login} />
        <Route exact path="/register" component={Register} />
        <FetchUser>
          <ProtectedRoute exact path="/admin_home" component={AdminHome} />
        </FetchUser>
        <Route component={Nomatch} />
      </Switch>
=======
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/admin" component={Login} />
      <Route exact path="/register" component={Register} />
      <FetchUser>
        <ProtectedRoute exact path="/admin_home" component={AdminHome} />
      </FetchUser>
      <Route component={Nomatch} />
    </Switch>
>>>>>>> 338fe5da7a985c7841072cd138d8b9b9d2cfd545
  </Fragment>
);

export default App;
