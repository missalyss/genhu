import React, { Fragment, } from 'react';
import Home from './components/shared/Landing';
import Nomatch from './components/shared/Nomatch';
import FetchUser from './components/auth/FetchUser';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Switch, Route, } from 'react-router-dom';
import AdminHome from './components/admin/AdminHome';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Calendar from './components/calendar/Calendar';
import Navbar from './components/shared/Navbar';
import About from './components/about/About';
import Expeditions from './components/expeditions/Expeditions';
import Homes from './components/homes/Homes';
import Contact from './components/contact/Contact';

const App = () => (
  // if the screen size changes show this:
  <Fragment>
    <Navbar />
    <>
      <Switch>
        <FetchUser>
          <ProtectedRoute exact path="/admin_home" component={AdminHome} />
        </FetchUser>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path='/about' component={About} />
        <Route exact path='/expeditions' component={Expeditions} />
        <Route exact path='/homes' component={Homes} />
        <Route exact path='/contact' component={Contact} />
        <Route component={Nomatch} />
      </Switch>
      </>
  </Fragment>
);

export default App;
