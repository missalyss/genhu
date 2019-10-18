import React from 'react';
import axios from 'axios';
import Footer from '../shared/Footer';

class Staff extends React.Component {
  
  state = { directors: [], volunteers: [], staff: []};

  componentDidMount() {
    axios
      .get("/api/staff")
      .then(res => {
        this.setState({ staff: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderStaff() {
    const { staff } = this.state;

    return (
      <div>
        { staff.map(s => (
          <>
          <div>{s.phone}</div>
          </>
        ))}
      </div>
        );

  }

}

export default Staff;
