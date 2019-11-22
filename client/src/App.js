import React, { Fragment, Component } from 'react';
import Home from './components/shared/Landing';
import Nomatch from './components/shared/Nomatch';
import FetchUser from './components/auth/FetchUser';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Switch, Route, } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
import MyCalendar from './components/calendar/MyCalendar';
import Navbar from './components/shared/Navbar';
import About from './components/about/About';
import PolicyFinancial from './components/policyandfinancial/PolicyFinancial';
import Expeditions from './components/expeditions/Expeditions';
// import Homes from './components/homes/Homes';
import Contact from './components/contact/Contact';
import Orphanages from './components/orphanages/Orphanages';
import DropInCenters from './components/DropInCenter/DropInCenter';
import ShowOrphanages from './components/orphanages/ShowOrphanages';
import ShowCenters from './components/homes/centers/ShowCenters';
// Admin Imports
import Admin from './components/admin/Admin';
import Stats from './components/admin/stats/Stats';
import Staff from './components/staff/Staff';
import AdminHomes from './components/admin/homes/AdminHomes';
import Employees from './components/admin/employees/Employees'
import { HashLink as Link } from 'react-router-hash-link';
import Privacy from './components/policyandfinancial/Privacy';
import ProvenSoulsPage from './components/shared/ProvenSoulsPage';
import Footer from './components/shared/Footer';
// Mobile Page

import LandingMob from './components/shared/landing-mobile/LandingMob';


class App extends Component {
  state= { 
    pageLoaded: false, 
    width: window.innerWidth, 
    menuLoaded: false
  };

  toggleModal = () => {
    // const { menuLoaded } = this.state;
    this.setState({ menuloaded: !this.state.menuloaded })
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.handleWindowSizeChange);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  };

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { width, menuLoaded } = this.state
    const isMobile = width <= 600;

    if (isMobile) {
      return(
        <>
      {/* <NavMobile toggleModal={this.togglemodal} />
      {menuLoaded === true ? <Modal toggleModal={this.toggleModal} /> : <></>} */}
      {/* <Switch> */}
      <Navbar />
      <Route exact path="/" component={LandingMob} />
      <Route exact path='/staff' component={Staff} />
          {/* <Route exact path="/login" component={LoginMob} /> */}
          {/* <Route exact path="/register" component={RegisterMob} /> */}
          {/* <Route exact path="/calendar" component={MyCalendarMob} /> */}
          {/* <Route exact path='/about' component={AboutMob} /> */}
          {/* <Route exact path='/policy' component={PolicyFinancialMob} /> */}
          {/* <Route exact path='/expeditions' component={ExpeditionsMob} /> */}
          {/* <Route exact path='/contact' component={ContactMob} /> */}
          {/* <Route exact path='/staff' component={StaffMob} /> */}
          {/* <Route exact path='/orphanages' component={OrphanagesMob} /> */}
          {/* <Route exact path='/drop_in_centers' component={DropInCentersMob} /> */}
          {/* <Route exact path='/orphanages/:id' component={ShowOrphanagesMob} /> */}
          {/* <Route exact path='/centers/:id' component={ShowCentersMob} /> */}
          {/* <Route exact path='/privacy' component={ PrivacyMob } /> */}
          {/* <Route exact path='/proven_souls' component={ ProvenSoulsPageMob } /> */}
          {/* <FetchUser> */}
            {/* <ProtectedRoute exact path="/admin" component={AdminMob} /> */}
            {/* <ProtectedRoute exact path="/datastats" component={StatsMob} /> */}
            {/* <ProtectedRoute exact path="/admin_homes" component={AdminHomesMob} /> */}
            {/* <ProtectedRoute exact path="/admin_employee" component={EmployeesMob} /> */}
          {/* </FetchUser> */}
          {/* <Route component={NomatchMob} /> */}
      {/* </Switch> */}
      </>
      );
    } else {
    return (
    <>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/calendar" component={MyCalendar} />
          <Route exact path='/about' component={About} />
          <Route exact path='/policy' component={PolicyFinancial} />
          <Route exact path='/expeditions' component={Expeditions} />
          {/* <Route exact path='/homes' component={Homes} /> */}
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/staff' component={Staff} />
          <Route exact path='/orphanages' component={Orphanages} />
          <Route exact path='/drop_in_centers' component={DropInCenters} />
          <Route exact path='/orphanages/:id' component={ShowOrphanages} />
          <Route exact path='/centers/:id' component={ShowCenters} />
          <Route exact path='/privacy' component={ Privacy } />
          <Route exact path='/proven_souls' component={ ProvenSoulsPage } />
          <FetchUser>
            <ProtectedRoute exact path="/admin" component={Admin} />
            <ProtectedRoute exact path="/datastats" component={Stats} />
            <ProtectedRoute exact path="/admin_homes" component={AdminHomes} />
            <ProtectedRoute exact path="/admin_employee" component={Employees} />
          </FetchUser>
          <Route component={Nomatch} />
        </Switch>
        <Footer/>
      </>
     
    )
    }
  }
};

export default App;
