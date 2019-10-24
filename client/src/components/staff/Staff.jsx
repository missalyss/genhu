import React from 'react';
import axios from 'axios';
import Footer from '../shared/Footer';
import { Link } from 'react-router-dom';
import './Staff.css';
import StaffModal from './StaffModal';
import StaffShow from './StaffShow';
import DirectorShow from './DirectorShow';
import VolunteerShow from './VolunteerShow';

class Staff extends React.Component {
  
  state = { directors: [], volunteers: [], staff: [], toggleForm: false, toggleModal: false, };

  componentDidMount() {
    axios
      .get("/api/staff")
      .then(res => {
        this.setState({ staff: res.data });
      })
    axios
      .get("/api/directors")
      .then(res => {
        this.setState({ directors: res.data });
      })
    axios
      .get("/api/volunteers")
      .then(res => {
        this.setState({ volunteers: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  toggle = () => {
    const { toggleModal } = this.state;
    this.setState({ toggleModal: !toggleModal });
  };

  renderStaff() {

    const { staff } = this.state;
    return (
      <div className = 'staff-container'>
        { staff.map(s => (
          <StaffShow
            key = { s.id } 
            {...s}
          />
        ))}
      </div>
        );

  }
  renderDirectors() {

    const { directors } = this.state;
    return (
      <div className = 'staff-container'>
        { directors.map(d => (
          <DirectorShow
          key = { d.id }
          {...d}
          />
        ))}
      </div>
        );

  }
  renderVolunteers() {

    const { volunteers } = this.state;
    return (
      <div className = 'staff-container'>
        { volunteers.map(v => (
          <VolunteerShow
          key = { v.id }
          {...v}
          />
        ))}
      </div>
        );

  }

  render () {
    return (

      <div className='employee_page'>
        <div>
          <StaffModal />
        </div>
        <br /><br /><br /><br />
        <div id='directors'>
          <h1>Directors</h1>
          {this.renderDirectors()}
        </div>
        <div id='volunteers'>
        <h1>Volunteers</h1>
        {this.renderVolunteers()}
        </div>
        <br/>
        <div id='staff'>
          <h1>Developers</h1>
          {this.renderStaff()}
        </div>
        <br/>
      <Footer/>
      </div>
    )
  }

}

export default Staff;
