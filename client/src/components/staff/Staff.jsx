import React from 'react';
import axios from 'axios';
import Footer from '../shared/Footer';
import { Link } from 'react-router-dom';
import './Staff.css';
import StaffModal from './StaffModal';
import StaffShow from './StaffShow';

class Staff extends React.Component {
  
  state = { directors: [], volunteers: [], staff: [], toggleForm: false };

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
          <div >
          <Link><div className= 'staff-box'>
            <div className='staff-name'>
              <h1>{d.first_name} {d.last_name}</h1>
            </div>
            <div className='staff-title'>
              <h3>{d.title}</h3>
            </div>
          </div>
          </Link>
          </div>
        ))}
      </div>
        );

  }
  renderVolunteers() {

    const { volunteers } = this.state;
    return (
      <div>
        { volunteers.map(v => (
          <div className = 'staff-container'>
          <div className='staff-box'>
          <Link><div>{v.first_name} {v.last_name}</div></Link>
          <div>{v.title}</div>
          </div>
          </div>
        ))}
      </div>
        );

  }

  render () {
    return (
      <>
      <div style={{padding: '5em' }}>
        <StaffModal/>
        <div>
        <h1>Directors</h1>
        {this.renderDirectors()}
        </div>
        
        <br/>
        <div>
          <h1>Staff</h1>
        {this.renderStaff()}
        </div>
        <br/>
        <h1>Volunteers</h1>
        {this.renderVolunteers()}
      </div>
      <Footer/>
      </>
    )

  }
  

}

export default Staff;
